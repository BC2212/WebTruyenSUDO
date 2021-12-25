using Models.DAO;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebSUDO_v2.Controllers
{
    public class TruyenController : Controller
    {
        // GET: Truyen
        public ActionResult Index(int id=0)
        {
            dynamic model = new ExpandoObject();
            model.Truyen = new TruyenDb().GetTruyenTheoID(id);
            model.Chapters = new ChapterDb().GetDSChapterTheoTruyenID(id);
            ViewBag.Title = model.Truyen.Name;
            return View(model);
        }
    }
}