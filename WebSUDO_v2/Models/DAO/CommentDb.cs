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

        public IEnumerable<Comment> GetDSCommentTheoChapterTruyen(long truyenID, long chapterID)
        {
            return context.Database.SqlQuery<Comment>("SP_SUDO_LayDSCommentTheoChapterTruyen @TruyenID, @ChapterID", new SqlParameter[] {
                new SqlParameter("@TruyenID", truyenID),
                new SqlParameter("@ChapterID", chapterID)
            }).ToList();
        }

        public int AddComment(long truyenID, long chapterID, long userID, string content)
        {
            SqlParameter[] param = new SqlParameter[] {
                new SqlParameter("@TruyenID", truyenID),
                new SqlParameter("@ChapterID", chapterID),
                new SqlParameter("@UserID", userID),
                new SqlParameter("@Content", content)
            };
            return context.Database.SqlQuery<int>("SP_SUDO_ThemComment @TruyenID, @ChapterID, @UserID, @Content", param).SingleOrDefault();
        }
    }
}
