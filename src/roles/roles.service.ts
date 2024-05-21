import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './create_role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { RoleModel } from './roles.model';

@Injectable()
export class RolesService {
   constructor(@InjectModel(RoleModel) private roleModel: typeof RoleModel) {}

   async createRole(dto: CreateRoleDto) {
      const role = await this.roleModel.create(dto);
      return role;
   }

   async getRoleByValue(value: string) {
      return await this.roleModel.findOne({ where: { value } });
   }
}
