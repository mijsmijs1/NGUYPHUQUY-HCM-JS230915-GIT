import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'My name is PHU23232UY';
  }

  findAll() {
    return 'My name is PQ,THY';
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
