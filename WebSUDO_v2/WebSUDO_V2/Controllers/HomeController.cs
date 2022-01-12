using Models.DAO;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static System.Net.Mime.MediaTypeNames;

namespace WebSUDO_v2.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            dynamic model = new ExpandoObject();
            model.ListTruyenMoiCapNhat = new TruyenDb().GetTruyenMoiCapNhat();
            TempData["ListTruyenHot"] = new TruyenDb().GetTruyenHot();
            TempData.Keep();
            return View(model);
        }
    }
}