using Models.DAO;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebSUDO_v2.Areas.Translator.Controllers
{
    public class HomeController : Controller
    {
        // GET: Translator/Home
        public ActionResult Index(int userID=0)
        {
            return View(userID);
        }

        public ActionResult Settings()
        {
            return View();
        }

        public ActionResult Manage(int userID)
        {
            dynamic model = new ExpandoObject();
            model.ListTruyenQuanLy = new TruyenDb().GetTruyenTheoUserID(userID);
            return View(model);
        }
    }
}