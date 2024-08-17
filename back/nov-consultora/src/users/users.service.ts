import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  create(createUser: User) {
    try{
      this.usersRepository.save(createUser);
      return "User created successfully";
    }catch (error){
      return error
    }
    }
    findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUser: User) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
