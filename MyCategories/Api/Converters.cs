namespace MyCategories.Api
{
    public class Converters
    {
        public static TreeNodeResource TreeNodeConverter(Models.TreeNode tn)
        {
            TreeNodeResource Tn = new TreeNodeResource
            {
                name = tn.Name,
                id = tn.Id.ToString(),
                parentId = tn.ParentId.HasValue ? tn.ParentId.ToString() : "r"
            };
            return Tn;
        }
    }
}