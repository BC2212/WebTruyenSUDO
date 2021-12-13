namespace Models.Entity
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("Role")]
    public partial class Role
    {
        [StringLength(50)]
        public string ID { get; set; }

        [StringLength(50)]
        public string Name { get; set; }
    }
}
