import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Create_UserDto } from './create_user.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModel } from './user.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
@ApiTags('Users')
@Controller('users')
export class UserController {
   constructor(private userService: UserService) {}

   @ApiOperation({ summary: 'Create new user' })
   @ApiResponse({ status: 200, type: UserModel })
   @Post()
   create(@Body() dto: Create_UserDto) {
      return this.userService.createUser(dto);
   }
   @ApiOperation({ summary: 'Get all users' })
   @ApiResponse({ status: 200, type: [UserModel] })
   @UseGuards(JwtAuthGuard)
   @Get()
   getAllUsers() {
      return this.userService.getAllUsers();
   }
}
