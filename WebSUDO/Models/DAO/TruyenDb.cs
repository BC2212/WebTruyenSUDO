using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models.Entity;

namespace Models.DAO
{
    public class TruyenDb
    {
        private SudoDbContext context;

        public TruyenDb()
        {
            context = new SudoDbContext();
        }

        public IEnumerable<Truyen> GetTruyenMoiCapNhat(int page)
        {
            var list = context.Database
                .SqlQuery<Truyen>("SP_SUDO_LayDSTruyenMoiCapNhat @Page", new SqlParameter("@Page", page)).ToList();
            return list;
        }
    }
}
