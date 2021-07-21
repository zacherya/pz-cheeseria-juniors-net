using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Data
{
    public class CheesesRepository
    {
        public static readonly Cheese[] Cheeses =
        {
            new Cheese
          {
            Id = 1,
            Title = "ABBAYE DE BELLOC",
            Price = 109.95M,
            Description = "Abbaye de Belloc is a flat wheel-shaped traditional, farmhouse, unpasteurised, semi-hard cheese made from sheep's milk. It has a natural, crusty, brownish rind with patches of red, orange and yellow. The rind is marked with tiny craters.",
            Category =  "creamy, dense and firm",
            Image = "https://www.cheese.com/media/img/cheese/Abbaye-de-Belloc.jpg"
          },
            new Cheese
          {
            Id = 2,
            Title = "ABBAYE DU MONT DES CATS",
            Price = 29.21M,
            Description = "The Abbaye du Mont des Cats cheese is made by monks in a monastery of the same name in the town of Godewaersvelde, in Northern France. Cow's milk from local farms is used and the milk is gently pasteurised for cheese production. The maturation process takes about 4 to 5 weeks",
            Category = "semi-soft, artisan, brined",
            Image = "https://www.cheese.com/media/img/cheese/Mont_des_Cats_kaas.jpg"
          },
            new Cheese
          {
            Id = 3,
            Title = "ADELOST",
            Price = 367.55M,
            Description = "Adelost is a Swedish blue cheese made from cow's milk. The blue-grey veins running throughout are a distinctive feature of the cheese. It has a sharp, salty and tangy flavour. The ripening process is for two to three months. The cheese comes in a drum shape with a rind of pale cream, which is lightly dotted with moulds.",
            Category = "semi-soft, blue-veined",
            Image = "https://www.cheese.com/media/img/cheese/Adelost_QnxYLx6.jpg"
          }, 
          new Cheese
          {
            Id = 4,
            Title = "FETA",
            Price = 78.65M,
            Description = "Feta is undoubtedly one of the most famous Greek cheeses. In fact, Feta occupies 70% stake in Greek cheese consumption. To create traditional feta, 30 percent of goat's milk is mixed with sheep's milk of animals grazing on pastures in the specific appellation of origin regions.",
            Category = "soft, brined",
            Image = "https://www.cheese.com/media/img/cheese/504_feta.jpg"
          },
          new Cheese
          {
            Id = 5,
            Title = "JARLSBERG",
            Price = 88.15M,
            Description = "Jarlsberg is a mild, semi-soft cow’s milk cheese of Norwegian origin. Created by Anders Larsen Bakke, it resembles a Swiss Emmental with distinctive, open and irregular ‘eyes’. Many a times Jarlsberg is marketed as a Swiss cheese because of its characteristics, though it tends to be sweeter and stronger than Emmentaler.",
            Category = "open, smooth and supple",
            Image = "https://www.cheese.com/media/img/cheese/Jarlsberg_in_Wholefoods_2.jpg"
          }, 
          new Cheese
          {
            Id = 6,
            Title = "MAASDAM",
            Price = 140M,
            Description = "Maasdam is a traditional, semi-hard Dutch cheese made from cow’s milk. The most characteristic feature is its ‘eyes’ (holes) that make up most of the cheese. The cheese was created in the early 1990s as an alternative to more expensive Swiss Emmental cheese. It is a high-fat cheese with a minimum of 45% fat. Although similar to Emmental, the moisture content in Maasdam is more, making it suppler.",
            Category = "creamy, open and supple",
            Image = "https://www.cheese.com/media/img/cheese/wiki/maasdam.jpg"
          }, 
          new Cheese
          {
            Id = 7,
            Title = "ROYALP TILSIT",
            Price = 625.57M,
            Description = "oyalp Tilsit or Swiss Tilsit is a light yellow semi-hard smear-ripened cheese made from unpasteurised/pasteurised cow milk. The pasteurised version is mild in flavour whereas the one made from fresh, unpasteurised milk is more strongly flavoured (called Farmhouse Tilsit). It is aged for about 5 months, which makes it a very strong smelling cheese comparable to a Limburger.",
          Category = "semi-hard, smear-ripened",
            Image = "https://www.cheese.com/media/img/cheese/Tilsit_cheese_1.jpg"
          }, 
          new Cheese
          {
            Id = 8,
            Title = "SAINT ALBRAY",
            Price =  860.62M,
            Description = "Saint Albray is a flower-shaped cheese that comes from the Aquitaine region of France. Made with pasteurised cow's milk and ripened for 2 weeks, it slices off skilfully with each half-pound cut looking like a \"petal\". When each petal comes together around a disk, they form a hollow centre similar to a flower.",
          Category = "soft, soft-ripened",
            Image = "https://www.cheese.com/media/img/cheese/12-saint-albray-shutterstock_1222710106.jpg"
          }
        };
    }
}