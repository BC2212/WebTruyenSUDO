namespace Models.Entity
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    [Table("UserGroup")]
    public partial class UserGroup
    {
        [StringLength(20)]
        public string ID { get; set; }

        [StringLength(50)]
        public string Name { get; set; }
    }
}
