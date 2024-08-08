// import { Injectable, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken';

// interface CustomRequest extends Request {
//   user: any;
// }

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   use(req: CustomRequest, res: Response, next: NextFunction) {
//     const authHeader = req.headers['authorization'];
//     if (!authHeader) {
//       console.error('Authorization header not found');
//       return res.status(401).send('Unauthorized');
//     }

//     const token = authHeader.split(' ')[1];
//     if (!token) {
//       console.error('Token not found');
//       return res.status(401).send('Unauthorized');
//     }

//     try {
//       const user = jwt.verify(token, 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key
//       req.user = user;
//       next();
//     } catch (err) {
//       console.error('Invalid token');
//       return res.status(401).send('Unauthorized');
//     }
//   }
// }