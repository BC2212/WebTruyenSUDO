using Models.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebSUDO_V2.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var list = new TruyenDb().GetTruyenMoiCapNhat(1);
            ViewBag.ListTheLoai = new TruyenDb().GetTheLoai();
            return View(list);
        }
    }
}