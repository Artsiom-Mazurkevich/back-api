import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Create_UserDto } from '../user/create_user.dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
   constructor(private authService: AuthService) {}

   @Post('/login')
   login(@Body() userDto: Create_UserDto) {
      return this.authService.login(userDto);
   }

   @Post('/registration')
   registration(@Body() userDto: Create_UserDto) {
      return this.authService.registration(userDto);
   }
}
