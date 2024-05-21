import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { UserModel } from '../user/user.model';
import { UserRoles } from './user-roles.model';

interface IRoleCreation {
   value: string;
   description: string;
}

@Table({ tableName: 'Roles' })
export class RoleModel extends Model<RoleModel, IRoleCreation> {
   @ApiProperty({ example: '1', description: 'Unique id for user' })
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;
   @ApiProperty({ example: 'ADMIN', description: 'user role' })
   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   value: string;
   @ApiProperty({ example: 'Administrator', description: 'role description' })
   @Column({ type: DataType.STRING, allowNull: false })
   description: string;

   @BelongsToMany(() => UserModel, () => UserRoles)
   users: UserModel[];
}
