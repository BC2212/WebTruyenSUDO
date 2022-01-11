using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSUDO_v2.Areas.Admin.Model
{
    public class AccountModel
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}