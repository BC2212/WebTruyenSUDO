namespace Models.Entity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Comment")]
    public partial class Comment
    {
        public long ID { get; set; }

        public long TruyenID { get; set; }

        public long ChapterID { get; set; }

        [Required]
        [StringLength(250)]
        public string Content { get; set; }

        public DateTime CreatedDate { get; set; }

        public long CreatedBy { get; set; }

        public bool Status { get; set; }

        public virtual string UserName { get; set; }
        public virtual string TenChapter { get; set; }

        public virtual Truyen Truyen { get; set; }

        public virtual User User { get; set; }
    }
}
