using System;
using System.Collections.Generic;
using System.Web.Http;
using MyCategories.Controllers;

namespace MyCategories.Api
{
    public class TreeController : ApiController
    {
        public IEnumerable<TreeNodeResource> Get()
        {
            return HomeController.Tree.ConvertAll(new Converter<Models.TreeNode, TreeNodeResource>(Converters.TreeNodeConverter));
        }
    }
}
