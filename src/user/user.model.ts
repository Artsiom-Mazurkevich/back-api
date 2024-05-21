import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { RoleModel } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

interface IUserCreation {
   email: string;
   password: string;
}

@Table({ tableName: 'Users' })
export class UserModel extends Model<UserModel, IUserCreation> {
   @ApiProperty({ example: '1', description: 'Unique id for user' })
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;
   @ApiProperty({ example: 'email@gmail.com', description: 'user email' })
   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   email: string;
   @ApiProperty({ example: '6543216545dsfdfh', description: 'user password' })
   @Column({ type: DataType.STRING, allowNull: false })
   password: string;
   @ApiProperty({ example: false, description: 'isBanned' })
   @Column({ type: DataType.BOOLEAN, defaultValue: false })
   banned: boolean;
   @ApiProperty({ example: '', description: 'ban reason' })
   @Column({ type: DataType.BOOLEAN, allowNull: true })
   banReason: string;

   @BelongsToMany(() => RoleModel, () => UserRoles)
   roles: RoleModel[];
}
