import { v2 as cloudinary } from 'cloudinary';
import { APIKEY, APISECRET, CLOUDNAME } from 'src/config/keys';

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: () => {
    return cloudinary.config({
      cloud_name: CLOUDNAME,
      api_key: APIKEY,
      api_secret: APISECRET,
    });
  },
};
