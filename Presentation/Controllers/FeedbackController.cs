using Dapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Presentation.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation.Controllers
{
    public class FeedbackController : Controller
    {
        protected IDbConnection connection { get; private set; }
        public FeedbackController()
        {
            this.connection = new SqlConnection("Server=TRAINEE-05; Database=Feedback; User Id=SA; Password=harant@26031999;Trusted_Connection=false;");
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public List<Product> GetProduct(int id)
        {
            var param = new DynamicParameters();
            param.Add("CategoryId", id);

            var sp = "uspGetProduct @CategoryID";

            var products = connection.Query<Product>(sp, param).ToList();

            return products;
        }

        [HttpGet]
        public List<ProductCategory> GetCategory()
        {
            var sp = "uspGetCatagory";

            List<ProductCategory> categories = connection.Query<ProductCategory>(sp).ToList();

            return categories;
        }

    }
}
