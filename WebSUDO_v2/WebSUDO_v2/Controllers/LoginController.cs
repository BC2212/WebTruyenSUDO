using Models.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using WebSUDO_v2.Models;

namespace WebSUDO_v2.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(Account account)
        {
            string groupID = string.Empty;
            if (Membership.ValidateUser(account.UserName, account.Password) && ModelState.IsValid)
            {
                //Lưu session
                FormsAuthentication.SetAuthCookie(account.UserName, true);
                //switch (new AccountDb().GetGroupID(account.UserName))
                //{
                //    case "ADMIN":
                //        return RedirectToAction("Index", "Home")
                //}
                return RedirectToAction("Index", "Home", new { Area = new AccountDb().GetGroupID(account.UserName) });
            }
            else
            {
                ModelState.AddModelError("", "Username hoặc Password không đúng");
            }

            return RedirectToAction("Index", "Home");
        }
    }
}