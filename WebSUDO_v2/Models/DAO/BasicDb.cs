using Models.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DAO
{
    public class BasicDb
    {
        protected SudoDbContext context;

        public BasicDb()
        {
            context = new SudoDbContext();
        }
    }
}
