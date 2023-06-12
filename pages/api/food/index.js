import connectMongo from "@/utils/connect";
import Food from "@/models/foodmodel";
export default async function GetAllFood(req, res) {
  try {
    if (req.method === 'GET') {
      await connectMongo();
      const foods = await Food.find({});
      res.status(200).json({
        status: 'success!',
        data: foods,
      });
    }
  } catch (e) {
    res.status(500).json({ message: 'something went wrong', error: e });
  }
}
