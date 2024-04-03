// users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user/user.entity'; // Import User entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
