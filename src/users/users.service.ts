import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()

export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    console.log(user);
    
    try {

    // In UsersService.createUser
      const checkExist = await this.usersRepository.findOne({ where: { email: user.email } });
      if (checkExist) {
        throw new BadRequestException('Email already exists');
      }

      console.log("hello2");
      

      user.password = await bcrypt.hash(user.password, 10);
    
      const data: any = await this.usersRepository.save(user);
      // console.log(user.roles)
      delete data.password;
      return data;

    } catch (error) {
      console.log(error.stack);
      
    }
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id } }); // Add `where` clause
  }

  async update(id: number, user: User): Promise<User> {
    await this.usersRepository.update(id, user);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
