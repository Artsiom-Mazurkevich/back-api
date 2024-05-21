import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './create_role.dto';
import { RolesService } from './roles.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserModel } from '../user/user.model';
import { RoleModel } from './roles.model';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
   constructor(private rolesService: RolesService) {}

   @ApiOperation({ summary: 'Create new role' })
   @ApiResponse({ status: 200, type: RoleModel })
   @Post()
   create(@Body() dto: CreateRoleDto) {
      return this.rolesService.createRole(dto);
   }
   @Get('/:value')
   getByValue(@Param('value') value: string) {
      return this.rolesService.getRoleByValue(value);
   }
}
