using Models.DAO;
using Models.Entity;
using System;
using System.Collections.Generic;
using System.Dynamic;
using System.IO;
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
            if (model.Truyen == null)
            {
                return RedirectToAction("Index", "Home");
            }
            model.Chapters = new ChapterDb().GetDSChapterTheoTruyenID(id);
            ViewBag.Title = model.Truyen.Name;
            return View(model);
        }

        public ActionResult Read(int truyenID=0, int chapterID = 0, string tenTruyen="")
        {
            dynamic model = new ExpandoObject();
            model.CurrentChapter = new ChapterDb().GetChapter(truyenID, chapterID);
            if (model.CurrentChapter == null)
            {
                return RedirectToAction("Index", "Truyen", new { truyenID = truyenID, chapterID = chapterID });
            }
            model.ListChapters = new ChapterDb().GetDSChapterTheoTruyenID(truyenID);
            string url = (string)model.CurrentChapter.ImageLink;
            model.ChapterImages = Directory.EnumerateFiles(Server.MapPath("~/"+url)).Select(fn => url + "/" + Path.GetFileName(fn));
            model.ListComments = new CommentDb().GetDSCommentTheoChapterTruyen(truyenID, chapterID);
            ViewBag.TenTruyen = tenTruyen;
            return View(model);
        }
    }
}