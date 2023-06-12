import Product from "@/models/productmodel";
import connectMongo from "@/utils/connect";
export default async function GetAllProducts(req, res) {
  try {
    if (req.method === 'GET') {
      await connectMongo();
      const posts = await Product.find({});
      res.status(200).json({
        status: 'success!',
        data: posts,
      });
    }
  } catch (e) {
    res.status(500).json({ message: 'something went wrong', error: e });
  }
}
