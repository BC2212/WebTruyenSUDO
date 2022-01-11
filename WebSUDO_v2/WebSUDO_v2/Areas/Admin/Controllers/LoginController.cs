using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using WebSUDO_v2.Areas.Admin.Model;

namespace WebSUDO_v2.Areas.Admin.Controllers
{
    public class LoginController : Controller
    {
        // GET: Admin/Login
        //public ActionResult Index()
        //{
        //    return View();
        //}

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(string username, string password)
        {
            if (Membership.ValidateUser(username, password) && ModelState.IsValid)
            {
                //Lưu session
                FormsAuthentication.SetAuthCookie(username, true);
                return RedirectToAction("Index", "Home", new { Area = "Admin" });
            }
            else
            {
                ModelState.AddModelError("", "Username hoặc Password không đúng");
            }
            return RedirectToAction("Index", "Home", new { area=""});
        }

        public ActionResult Logout()
        {
            //Xóa session
            FormsAuthentication.SignOut();
            return RedirectToAction("Index", "Home", new { Area = "Admin" });
        }
    }
}