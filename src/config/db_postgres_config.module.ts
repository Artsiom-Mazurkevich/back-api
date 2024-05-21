import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import * as process from 'process';
import { UserModel } from '../user/user.model';
import { RoleModel } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

@Module({
   imports: [
      ConfigModule.forRoot({
         envFilePath: `.${process.env.NODE_ENV}.env`,
      }),
      SequelizeModule.forRoot({
         dialect: 'postgres',
         host: process.env.PG_HOST,
         port: Number(process.env.PG_PORT),
         username: process.env.PG_USERNAME,
         password: process.env.PG_PASSWORD,
         database: process.env.PG_DATABASE,
         models: [UserModel, RoleModel, UserRoles],
         autoLoadModels: true,

         //(dialectOptions) For connect to DB !
         dialectOptions: {
            ssl: {
               require: true,
            },
         },
      }),
   ],
   exports: [SequelizeModule],
})
export class DB_postgres_configModule {}
