using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DAO
{
    public class AccountDb : BasicDb
    {
        public AccountDb() : base() { }

        public bool CheckLogin(string username, string password)
        {
            return Convert.ToBoolean(context.Database.SqlQuery<int>("SP_SUDO_CheckLogin @UserName, @Password", new SqlParameter[] {
                new SqlParameter("@UserName", username),
                new SqlParameter("@Password", password)
            }).SingleOrDefault());
        }
    }
}
