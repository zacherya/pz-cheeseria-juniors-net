using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Pz.Cheeseria.Api.Data;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace Pz.Cheeseria.Api
{
    public class Program
    {
        public static string ConnectionString { get; private set; } = "Server=svfs01;Database=PzCheeseria;Trusted_Connection=True;";
        public static void Main(string[] args)
        {
            string path = Directory.GetCurrentDirectory();

            IConfigurationBuilder builder =
                new ConfigurationBuilder()
                    .SetBasePath(path)
                    .AddJsonFile("appsettings.json");

            IConfigurationRoot config = builder.Build();

            ConnectionString = config.GetConnectionString("PrimaryDbConnection");

            // Run through arguments
            for (int i = 0; i < args.Length; i++)
            {
                if ((args[i][0] == '/') || (args[i][0] == '-'))
                {
                    string arg = args[i].Substring(1);
                    string larg = arg.ToLower();

                    // Db arg passed through, overwrite default connection string
                    if (larg.StartsWith("db="))
                    {
                        int idx = arg.IndexOf('=');
                        if (idx <= 0) continue;

                        string strDbConn = arg.Substring(idx + 1);
                        if (string.IsNullOrWhiteSpace(strDbConn)) break;

                        ConnectionString = strDbConn;
                    }
                }
            }

            //Start web api host
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
