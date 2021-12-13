namespace Models.Entity
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("MenuType")]
    public partial class MenuType
    {
        public int ID { get; set; }

        [StringLength(50)]
        public string Name { get; set; }
    }
}
