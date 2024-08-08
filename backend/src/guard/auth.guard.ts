// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { roles } from './roles.enum';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const handler = context.getHandler();
//     if (!handler) {
//       console.error('Handler not found in context');
//       return false;
//     }

//     const roles = this.reflector.get<roles[]>('roles', handler);
//     if (!roles) {
//       console.error('Roles metadata not found');
//       return true;
  

//     const request = context.switchToHttp().getRequest();
//     const user = request.user;

//     if (!user) {
//       console.error('User not found in request');
//       return false;
//     }

//     if (!user.role) {
//       console.error('User role not found');
//       return false;
//     }

//     console.log('User:', user);
//     console.log('Roles:', roles);

//     return roles.some(role => user.role.includes(role));
//   }
// }