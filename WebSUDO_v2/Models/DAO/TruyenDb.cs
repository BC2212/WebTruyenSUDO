using Models.Entity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DAO
{
    public class TruyenDb
    {
        SudoDbContext context;

        public TruyenDb()
        {
            context = new SudoDbContext();
        }

        public IEnumerable<Truyen> GetTruyenMoiCapNhat(int page = 1)
        {
            return context.Database.SqlQuery<Truyen>("SP_SUDO_LayDSTruyenMoiCapNhat @Page", new SqlParameter("@Page", page)).ToList();
        }

        public IEnumerable<Truyen> GetTruyenHot()
        {
            return context.Database.SqlQuery<Truyen>("SP_SUDO_LayDSTruyenHot").ToList();
        }

        public Truyen GetTruyenTheoID(int id)
        {
            return context.Database.SqlQuery<Truyen>("SP_SUDO_LayTruyenTheoID @ID", new SqlParameter("@ID", id)).SingleOrDefault();
        }

        public IEnumerable<Truyen> GetTruyenTheoUserID(int id)
        {
            return context.Database.SqlQuery<Truyen>("SP_SUDO_LayDSTruyenTheoUserID @UserID", new SqlParameter("@UserID", id)).ToList();
        }
    }
}
