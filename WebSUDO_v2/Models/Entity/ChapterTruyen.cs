namespace Models.Entity
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ChapterTruyen")]
    public partial class ChapterTruyen
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long TruyenID { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long ChapterID { get; set; }

        [StringLength(250)]
        public string TenChapter { get; set; }

        [StringLength(250)]
        public string ImageLink { get; set; }

        public DateTime CreatedDate { get; set; }

        public long? CreatedBy { get; set; }

        public DateTime ModifiedDate { get; set; }

        public long? ModifiedBy { get; set; }

        public virtual Truyen Truyen { get; set; }

        public virtual User User { get; set; }

        public virtual User User1 { get; set; }
    }
}
