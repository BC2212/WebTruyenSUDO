using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace Models.Entity
{
    public partial class SudoDbContext : DbContext
    {
        public SudoDbContext()
            : base("name=SudoDbContext")
        {
        }

        public virtual DbSet<About> Abouts { get; set; }
        public virtual DbSet<ChapterTruyen> ChapterTruyens { get; set; }
        public virtual DbSet<Comment> Comments { get; set; }
        public virtual DbSet<Contact> Contacts { get; set; }
        public virtual DbSet<Credential> Credentials { get; set; }
        public virtual DbSet<DanhGiaTruyen> DanhGiaTruyens { get; set; }
        public virtual DbSet<Feedback> Feedbacks { get; set; }
        public virtual DbSet<Footer> Footers { get; set; }
        public virtual DbSet<Menu> Menus { get; set; }
        public virtual DbSet<MenuType> MenuTypes { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Slide> Slides { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<SystemConfig> SystemConfigs { get; set; }
        public virtual DbSet<TagTruyen> TagTruyens { get; set; }
        public virtual DbSet<TheLoai> TheLoais { get; set; }
        public virtual DbSet<TheoDoi> TheoDois { get; set; }
        public virtual DbSet<Truyen> Truyens { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<UserGroup> UserGroups { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<About>()
                .Property(e => e.MetaTitle)
                .IsUnicode(false);

            modelBuilder.Entity<About>()
                .Property(e => e.CreatedBy)
                .IsUnicode(false);

            modelBuilder.Entity<About>()
                .Property(e => e.ModifiedBy)
                .IsUnicode(false);

            modelBuilder.Entity<About>()
                .Property(e => e.MetaDescriptions)
                .IsFixedLength();

            modelBuilder.Entity<Credential>()
                .Property(e => e.UserGroupID)
                .IsUnicode(false);

            modelBuilder.Entity<Credential>()
                .Property(e => e.RoleID)
                .IsUnicode(false);

            modelBuilder.Entity<Footer>()
                .Property(e => e.ID)
                .IsUnicode(false);

            modelBuilder.Entity<Role>()
                .Property(e => e.ID)
                .IsUnicode(false);

            modelBuilder.Entity<Slide>()
                .Property(e => e.CreatedBy)
                .IsUnicode(false);

            modelBuilder.Entity<Slide>()
                .Property(e => e.ModifiedBy)
                .IsUnicode(false);

            modelBuilder.Entity<SystemConfig>()
                .Property(e => e.ID)
                .IsUnicode(false);

            modelBuilder.Entity<SystemConfig>()
                .Property(e => e.Type)
                .IsUnicode(false);

            modelBuilder.Entity<TheLoai>()
                .Property(e => e.MetaTitle)
                .IsUnicode(false);

            modelBuilder.Entity<TheLoai>()
                .Property(e => e.MetaDescriptions)
                .IsFixedLength();

            modelBuilder.Entity<TheLoai>()
                .HasMany(e => e.Truyens)
                .WithMany(e => e.TheLoais)
                .Map(m => m.ToTable("TheLoaiTruyen").MapLeftKey("TheLoaiID").MapRightKey("TruyenID"));

            modelBuilder.Entity<Truyen>()
                .Property(e => e.MetaTitle)
                .IsUnicode(false);

            modelBuilder.Entity<Truyen>()
                .Property(e => e.MetaDescriptions)
                .IsFixedLength();

            modelBuilder.Entity<Truyen>()
                .HasMany(e => e.ChapterTruyens)
                .WithRequired(e => e.Truyen)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Truyen>()
                .HasMany(e => e.Comments)
                .WithRequired(e => e.Truyen)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Truyen>()
                .HasMany(e => e.DanhGiaTruyens)
                .WithRequired(e => e.Truyen)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Truyen>()
                .HasMany(e => e.TagTruyens)
                .WithRequired(e => e.Truyen)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Truyen>()
                .HasMany(e => e.TheoDois)
                .WithRequired(e => e.Truyen)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<User>()
                .Property(e => e.UserName)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.Password)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.GroupID)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.CreatedBy)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .Property(e => e.ModifiedBy)
                .IsUnicode(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.ChapterTruyens)
                .WithOptional(e => e.User)
                .HasForeignKey(e => e.CreatedBy);

            modelBuilder.Entity<User>()
                .HasMany(e => e.ChapterTruyens1)
                .WithOptional(e => e.User1)
                .HasForeignKey(e => e.ModifiedBy);

            modelBuilder.Entity<User>()
                .HasMany(e => e.Comments)
                .WithRequired(e => e.User)
                .HasForeignKey(e => e.CreatedBy)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.DanhGiaTruyens)
                .WithRequired(e => e.User)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.TheLoais)
                .WithOptional(e => e.User)
                .HasForeignKey(e => e.ModifiedBy);

            modelBuilder.Entity<User>()
                .HasMany(e => e.TheLoais1)
                .WithOptional(e => e.User1)
                .HasForeignKey(e => e.CreatedBy);

            modelBuilder.Entity<User>()
                .HasMany(e => e.TheoDois)
                .WithRequired(e => e.User)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.Truyens)
                .WithOptional(e => e.User)
                .HasForeignKey(e => e.CreatedBy);

            modelBuilder.Entity<User>()
                .HasMany(e => e.Truyens1)
                .WithOptional(e => e.User1)
                .HasForeignKey(e => e.ModifiedBy);

            modelBuilder.Entity<UserGroup>()
                .Property(e => e.ID)
                .IsUnicode(false);
        }
    }
}
