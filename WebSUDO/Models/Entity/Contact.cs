namespace Models.Entity
{
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Contact")]
    public partial class Contact
    {
        public int ID { get; set; }

        [Column(TypeName = "ntext")]
        public string Content { get; set; }

        public bool? Status { get; set; }
    }
}
