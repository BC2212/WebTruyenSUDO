using Models.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebSUDO_v2.Controllers
{
    public class TheLoaiController : Controller
    {
        // GET: TheLoai
        public ActionResult Index()
        {
            var list = new TheLoaiDb().GetTheLoai();
            return View(list);
        }
    }
}