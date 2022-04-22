using Microsoft.EntityFrameworkCore;
using Pz.Cheeseria.Api.Models;
using System;
using System.Configuration;
using System.IO;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using Microsoft.Extensions.Configuration;

namespace Pz.Cheeseria.Api.Data
{
    public class PzCheeseriaContext : DbContext
    {

        public PzCheeseriaContext() : base(new DbContextOptions<PzCheeseriaContext>()) { }
        public PzCheeseriaContext(DbContextOptions<PzCheeseriaContext> options) : base(options) { }

        public DbSet<Cheese> Cheeses { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
        public DbSet<PurchaseItem> PurchaseItems { get; set; }

        public static void InitializeDatabaseMigration(IServiceScope serviceScope)
        {
            //create the DB using migration, this will help with DB changes in the future
            var dbContext = serviceScope.ServiceProvider.GetRequiredService<PzCheeseriaContext>();
            dbContext.Database.Migrate();
            dbContext.SeedData();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Program.ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cheese>().Property(c => c.Price).HasPrecision(8, 2);
        }

    }

    public static class PzCheeseriaContextExtensions {
        public static void SeedData(this PzCheeseriaContext context)
        {
            try
            {
                if (!context.Cheeses.Any())
                {
                    Console.WriteLine("Cheeses are being populated");
                    context.Cheeses.AddRange(CheesesRepository.Cheeses);
                    context.SaveChanges();
                }
                else
                {
                    Console.WriteLine("Cheeses have already been populated");
                }

                if (!context.Purchases.Any())
                {
                    Console.WriteLine("Purchases are being populated");
                    context.Purchases.AddRange(PurchasesRepository.Purchases);
                    context.SaveChanges();
                }
                else
                {
                    Console.WriteLine("Purchases have already been populated");
                }
                if (!context.PurchaseItems.Any())
                {
                    Console.WriteLine("PurchaseItems are being populated");
                    context.PurchaseItems.AddRange(PurchaseItemsRepository.PurchaseItems);
                    context.SaveChanges();
                }
                else
                {
                    Console.WriteLine("PurchaseItems have already been populated");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"A seeding error has occured: {ex.Message}");
            }
        }
     }

}
