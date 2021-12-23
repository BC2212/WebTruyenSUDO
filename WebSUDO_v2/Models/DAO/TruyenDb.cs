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
            var list = context.Database.SqlQuery<Truyen>("SP_SUDO_LayDSTruyenMoiCapNhat @Page", new SqlParameter("@Page", page)).ToList();
            return list;
        }

        public IEnumerable<TheLoai> GetTheLoai()
        {
            var list = context.Database.SqlQuery<TheLoai>("SP_SUDO_LayDSTheLoai", null).ToList();
            return list;
        }
    }
}
