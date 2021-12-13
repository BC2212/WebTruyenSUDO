namespace Models.Entity
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("DanhGiaTruyen")]
    public partial class DanhGiaTruyen
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long UserID { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long TruyenID { get; set; }

        public int? Point { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public virtual Truyen Truyen { get; set; }

        public virtual User User { get; set; }
    }
}
