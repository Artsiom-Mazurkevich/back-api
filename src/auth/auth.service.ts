import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Create_UserDto } from '../user/create_user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserModel } from '../user/user.model';

@Injectable()
export class AuthService {
   constructor(
      private userService: UserService,
      private jwtService: JwtService
   ) {}

   async login(userDto: Create_UserDto) {
      const user = await this.validateUser(userDto);
      return this.generateToken(user);
   }

   async registration(userDto: Create_UserDto) {
      const candidate = await this.userService.getUserByEmail(userDto.email);
      if (candidate) {
         throw new HttpException('User with this email already exists', HttpStatus.BAD_REQUEST);
      }
      const hashPassword = await bcrypt.hash(userDto.password, 4);
      const user = await this.userService.createUser({ ...userDto, password: hashPassword });
      return this.generateToken(user);
   }

   private async generateToken(user: UserModel) {
      const payload = { email: user.email, id: user.id, role: user.roles };
      return {
         token: this.jwtService.sign(payload),
      };
   }

   private async validateUser(userDto: Create_UserDto) {
      const user = await this.userService.getUserByEmail(userDto.email);
      const passwordEquals = await bcrypt.compare(userDto.password, user.password);
      if (user && passwordEquals) {
         return user;
      }
      throw new UnauthorizedException({ message: 'password or email is incorrect' });
   }
}
