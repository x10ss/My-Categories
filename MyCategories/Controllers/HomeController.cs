using System;
using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;
using System.IO;
using MyCategories.Models;

namespace MyCategories.Controllers
{
    public class HomeController : Controller
    {
        public static List<TreeNode> Tree = new List<TreeNode>();
        
        public ActionResult Index()
        {
            return View(Tree);
        }

        [HttpPost]
        public ActionResult Index(HttpPostedFileBase postedFile)
        {
            Tree = new List<TreeNode>();
            string filePath = string.Empty;
            if (postedFile != null)
            {
                string path = Server.MapPath("~/Uploads/");
                if (!Directory.Exists(path))
                {
                    Directory.CreateDirectory(path);
                }

                filePath = path + Path.GetFileName(postedFile.FileName);
                string extension = Path.GetExtension(postedFile.FileName);
                postedFile.SaveAs(filePath);

                //Read the contents of CSV file.
                string csvData = System.IO.File.ReadAllText(filePath);

                //Execute a loop over the rows.
                foreach (string row in csvData.Split('\n'))
                {
                    if (!string.IsNullOrEmpty(row))
                    {
                        Tree.Add(new TreeNode
                        {
                            Id = Convert.ToInt32(row.Split(',')[0]),
                            ParentId = Int32.TryParse(row.Split(',')[1], out int result) ? result : (int?)null,
                            Name = row.Split(',')[2]
                        });
                    }
                }
            }
            return View(Tree);
        }

        public ActionResult Angular()
        {
            return View();
        }
    }
}