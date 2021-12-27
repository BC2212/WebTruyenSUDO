using Models.Entity;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.DAO
{
    public class CommentDb : BasicDb
    {
        public CommentDb() : base(){}

        public IEnumerable<Comment> GetDSCommentTheoChapterTruyen(int truyenID, int chapterID)
        {
            return context.Database.SqlQuery<Comment>("SP_SUDO_LayDSCommentTheoChapterTruyen @TruyenID, @ChapterID", new SqlParameter[] {
                new SqlParameter("@TruyenID", truyenID),
                new SqlParameter("@ChapterID", chapterID)
            }).ToList();
        }
    }
}
