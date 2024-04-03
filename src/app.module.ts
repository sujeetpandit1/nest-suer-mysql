import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { dataSourceOptions } from './config/db.config'; // Import your database configuration

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule, 
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
