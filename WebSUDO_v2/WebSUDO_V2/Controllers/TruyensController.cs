using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Models.Entity;

namespace WebSUDO_V2.Controllers
{
    public class TruyensController : Controller
    {
        private SudoDbContext db = new SudoDbContext();

        // GET: Truyens
        public ActionResult Index()
        {
            var truyens = db.Truyens.Include(t => t.User).Include(t => t.User1);
            return View(truyens.ToList());
        }

        // GET: Truyens/Details/5
        public ActionResult Details(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Truyen truyen = db.Truyens.Find(id);
            if (truyen == null)
            {
                return HttpNotFound();
            }
            return View(truyen);
        }

        // GET: Truyens/Create
        public ActionResult Create()
        {
            ViewBag.CreatedBy = new SelectList(db.Users, "ID", "UserName");
            ViewBag.ModifiedBy = new SelectList(db.Users, "ID", "UserName");
            return View();
        }

        // POST: Truyens/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "ID,Name,MetaTitle,Description,StorageLink,Image,AlternateName,CreatedDate,CreatedBy,ModifiedDate,ModifiedBy,MetaKeywords,MetaDescriptions,Status,TopHot,ViewCount,FollowCount,LastUpdate,CommentCount")] Truyen truyen)
        {
            if (ModelState.IsValid)
            {
                db.Truyens.Add(truyen);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.CreatedBy = new SelectList(db.Users, "ID", "UserName", truyen.CreatedBy);
            ViewBag.ModifiedBy = new SelectList(db.Users, "ID", "UserName", truyen.ModifiedBy);
            return View(truyen);
        }

        // GET: Truyens/Edit/5
        public ActionResult Edit(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Truyen truyen = db.Truyens.Find(id);
            if (truyen == null)
            {
                return HttpNotFound();
            }
            ViewBag.CreatedBy = new SelectList(db.Users, "ID", "UserName", truyen.CreatedBy);
            ViewBag.ModifiedBy = new SelectList(db.Users, "ID", "UserName", truyen.ModifiedBy);
            return View(truyen);
        }

        // POST: Truyens/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "ID,Name,MetaTitle,Description,StorageLink,Image,AlternateName,CreatedDate,CreatedBy,ModifiedDate,ModifiedBy,MetaKeywords,MetaDescriptions,Status,TopHot,ViewCount,FollowCount,LastUpdate,CommentCount")] Truyen truyen)
        {
            if (ModelState.IsValid)
            {
                db.Entry(truyen).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.CreatedBy = new SelectList(db.Users, "ID", "UserName", truyen.CreatedBy);
            ViewBag.ModifiedBy = new SelectList(db.Users, "ID", "UserName", truyen.ModifiedBy);
            return View(truyen);
        }

        // GET: Truyens/Delete/5
        public ActionResult Delete(long? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Truyen truyen = db.Truyens.Find(id);
            if (truyen == null)
            {
                return HttpNotFound();
            }
            return View(truyen);
        }

        // POST: Truyens/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(long id)
        {
            Truyen truyen = db.Truyens.Find(id);
            db.Truyens.Remove(truyen);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
