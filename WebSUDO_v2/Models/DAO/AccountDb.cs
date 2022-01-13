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
            return context.Database.SqlQuery<bool>("SP_SUDO_CheckLogin @UserName, @Password", new SqlParameter[] {
                new SqlParameter("@UserName", username),
                new SqlParameter("@Password", password)
            }).SingleOrDefault();
        }

        public string GetGroupID(string username)
        {
            return context.Database.SqlQuery<string>("SP_SUDO_GetGroupID @UserName", new SqlParameter("@UserName", username)).SingleOrDefault();
        }

        public long GetUserID(string username="")
        {
            return context.Database.SqlQuery<long>("SP_SUDO_GetUserID @UserName", new SqlParameter("@UserName", username)).SingleOrDefault();
        }
    }
}
