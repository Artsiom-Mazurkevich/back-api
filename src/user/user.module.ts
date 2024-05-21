import { forwardRef, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './user.model';
import { RoleModel } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';

@Module({
   providers: [UserService],
   controllers: [UserController],
   imports: [
      SequelizeModule.forFeature([UserModel, RoleModel, UserRoles]),
      RolesModule,
      forwardRef(() => AuthModule),
   ],
   exports: [UserService],
})
export class UserModule {}
