namespace Models.Entity
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Footer")]
    public partial class Footer
    {
        [StringLength(50)]
        public string ID { get; set; }

        [Column(TypeName = "ntext")]
        public string Content { get; set; }

        public bool? Status { get; set; }
    }
}
