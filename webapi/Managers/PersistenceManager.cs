using Breeze.Persistence.EFCore;
using model;

public class PersistenceManager : EFPersistenceManager<DatabaseContext>
{
    public PersistenceManager(DatabaseContext dbContext) : base(dbContext) { }
}
