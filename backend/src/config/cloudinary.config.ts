import { v2 as cloudinary } from 'cloudinary';
import { APIKEY, APISECRET, CLOUDNAME } from './keys';
export const cloudinaryConfig = () => {
cloudinary.config({
  cloud_name: CLOUDNAME,
  api_key: APIKEY,
  api_secret: APISECRET,
})};
