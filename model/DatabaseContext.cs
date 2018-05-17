using Microsoft.EntityFrameworkCore;

namespace model
{
    public partial class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
            //Configuration.ProxyCreationEnabled = false;
            //Configuration.LazyLoadingEnabled = false;
        }

        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }

        public DbSet<Employee> Employees { get; set; }
    }
}
