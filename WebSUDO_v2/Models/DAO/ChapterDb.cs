using Models.Entity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DAO
{
    public class ChapterDb : BasicDb
    {
        public ChapterDb() : base() { }

        public IEnumerable<ChapterTruyen> GetDSChapterTheoTruyenID(int id)
        {
            return context.Database.SqlQuery<ChapterTruyen>("SP_SUDO_LayDSChapterTruyenTheoTruyenID @TruyenID", new SqlParameter("@TruyenID", id)).ToList();
        }

        public ChapterTruyen GetChapter(int truyenID, int chapterID)
        {
            return context.Database.SqlQuery<ChapterTruyen>("SP_SUDO_LayChapterTheoTruyenID @TruyenID @ChapterID", new SqlParameter[] {
                new SqlParameter("@TruyenID", truyenID),
                new SqlParameter("@ChapterID", chapterID)
            }).SingleOrDefault();
        }
    }
}
