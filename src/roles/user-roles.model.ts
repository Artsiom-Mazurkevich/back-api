import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { RoleModel } from './roles.model';
import { UserModel } from '../user/user.model';

@Table({ tableName: 'UserRoles', timestamps: false })
export class UserRoles extends Model<UserRoles> {
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;
   @ForeignKey(() => RoleModel)
   @Column({ type: DataType.INTEGER })
   roleId: number;
   @ForeignKey(() => UserModel)
   @Column({ type: DataType.INTEGER })
   userId: number;
}
