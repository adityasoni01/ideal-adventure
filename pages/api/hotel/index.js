import connectMongo from "@/utils/connect";
import Hotel from "@/models/hotelmodel";
export default async function GetAllHotels(req, res) {
  try {
    if (req.method === 'GET') {
      await connectMongo();
      const hotels = await Hotel.find({});
      res.status(200).json({
        status: 'success!',
        data: hotels,
      });
    }
  } catch (e) {
    res.status(500).json({ message: 'something went wrong', error: e });
  }
}
