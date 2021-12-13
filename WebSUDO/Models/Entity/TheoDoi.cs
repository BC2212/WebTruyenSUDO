namespace Models.Entity
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("TheoDoi")]
    public partial class TheoDoi
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long UserID { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long TruyenID { get; set; }

        public DateTime FollowDate { get; set; }

        public virtual Truyen Truyen { get; set; }

        public virtual User User { get; set; }
    }
}
