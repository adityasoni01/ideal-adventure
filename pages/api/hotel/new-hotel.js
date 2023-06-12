import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';
import User from '@/models/userModel';
import Post from '@/models/postmodel';
import Product from '@/models/productmodel';
import connectMongo from '@/utils/connect';
import Hotel from '@/models/hotelmodel';

export const config = {
  api: {
    bodyParser: false,
  },
};
const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/hotels');
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '_' + path.originalFilename;
    };
  }
  options.maxFileSize = 4000 * 1024 * 1024;
  options.multiples = true;
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      // console.log(fields, files);
      resolve({ fields, files });
    });
  });
};

const handler = async (req, res) => {
  try {
    await fs.readdir(path.join(process.cwd() + '/public', '/hotels'));
    
    const data = await readFile(req, true);
    const values = {
      name: data.fields.name,
      Uid: data.fields.Uid,
      image: data.files.image.newFilename,
      price: data.fields.price,
      location: data.fields.location,
      capacity: data.fields.capacity,
    };
    
    await connectMongo();
    const hoteluser = await Hotel.create({Uid:values.Uid,name:values.name,image:values.image,price:values.price,location: values.location,capacity:values.capacity});
    res.status(201).json({
      status: 'success',
      post: hoteluser,
    });
  } catch (err) {
    res.status(500).json({ status: 'error', error:err.message });
  }
};

export default handler;
