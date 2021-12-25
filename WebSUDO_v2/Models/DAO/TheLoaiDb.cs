using Models.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DAO
{
    public class TheLoaiDb : BasicDb
    {
        public TheLoaiDb() : base() {}
        public IEnumerable<TheLoai> GetTheLoai()
        {
            return context.Database.SqlQuery<TheLoai>("SP_SUDO_LayDSTheLoai").ToList();
        }
    }
}
