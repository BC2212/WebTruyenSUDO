namespace Models.Entity
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Comment")]
    public partial class Comment
    {
        public long ID { get; set; }

        public long TruyenID { get; set; }

        [Required]
        [StringLength(250)]
        public string Content { get; set; }

        public DateTime CreatedDate { get; set; }

        public long CreatedBy { get; set; }

        public bool Status { get; set; }

        public virtual Truyen Truyen { get; set; }

        public virtual User User { get; set; }
    }
}
