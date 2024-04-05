import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'My name is PQ';
  }

  findAll() {
    return 'My name is PQ';
  }

  findOne(id: number) {
    return 'My name is PQ';
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return id;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
