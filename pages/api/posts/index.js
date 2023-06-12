import Post from "@/models/postmodel";
import connectMongo from "@/utils/connect";
export default async function GetAllPosts(req, res) {
  try {
    if (req.method === 'GET') {
      await connectMongo();
      const posts = await Post.find({});
      res.status(200).json({
        status: 'success!',
        data: posts,
      });
    }
  } catch (e) {
    res.status(500).json({ message: 'something went wrong', error: e });
  }
}
