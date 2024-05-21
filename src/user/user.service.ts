import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { Create_UserDto } from './create_user.dto';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UserService {
   constructor(
      @InjectModel(UserModel) private userModel: typeof UserModel,
      private roleService: RolesService
   ) {}

   async createUser(dto: Create_UserDto) {
      const user = await this.userModel.create(dto);
      const role = await this.roleService.getRoleByValue('USER');
      await user.$set('roles', [role.id]);
      user.roles = [role];
      return user;
   }

   async getAllUsers() {
      const users = await this.userModel.findAll({ include: { all: true } });
      return users;
   }

   async getUserByEmail(email: string) {
      const findUser = await this.userModel.findOne({ where: { email }, include: { all: true } });
      return findUser;
   }
}
