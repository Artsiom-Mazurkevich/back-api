import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { DB_postgres_configModule } from '../config/db_postgres_config.module';
import { RolesModule } from '../roles/roles.module';
import { AuthModule } from '../auth/auth.module';

@Module({
   imports: [DB_postgres_configModule, UserModule, RolesModule, AuthModule],
   providers: [],
   controllers: [],
})
export class AppModule {}
