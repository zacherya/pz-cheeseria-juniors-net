using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System.Configuration;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace Pz.Cheeseria.Api.Data
{
    public class PzCheeseriaContextFactory : IDesignTimeDbContextFactory<PzCheeseriaContext>
    {
        public PzCheeseriaContext CreateDbContext(string[] args)
        {

            string path = Directory.GetCurrentDirectory();

            IConfigurationBuilder builder =
                new ConfigurationBuilder()
                    .SetBasePath(path)
                    .AddJsonFile("appsettings.json");

            IConfigurationRoot config = builder.Build();

            string connString = config.GetConnectionString("PrimaryDbConnection");

            for (int i = 0; i < args.Length; i++)
            {
                if ((args[i][0] == '/') || (args[i][0] == '-'))
                {
                    string arg = args[i].Substring(1);
                    string larg = arg.ToLower();

                    if (larg.StartsWith("db="))
                    {
                        int idx = arg.IndexOf('=');
                        if (idx <= 0) continue;

                        string strDbConn = arg.Substring(idx + 1);
                        if (string.IsNullOrWhiteSpace(strDbConn)) break;

                        connString = strDbConn;
                    }
                }
            }
            var optionsBuilder = new DbContextOptionsBuilder<PzCheeseriaContext>();
            optionsBuilder.UseSqlServer(connString);

            return new PzCheeseriaContext(optionsBuilder.Options);
        }
    }
}
