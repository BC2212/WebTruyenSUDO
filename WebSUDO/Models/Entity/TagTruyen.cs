namespace Models.Entity
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("TagTruyen")]
    public partial class TagTruyen
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long TruyenID { get; set; }

        [Key]
        [Column(Order = 1)]
        [StringLength(50)]
        public string Name { get; set; }

        public virtual Truyen Truyen { get; set; }
    }
}
