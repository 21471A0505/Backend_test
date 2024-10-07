import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { CreateProfileDto } from './create-profile.dto';


@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Post()
  CreateUser(@Body() createUserDto: CreateUserDto, @Body() createProfileDto: CreateProfileDto) {
    return this.usersService.create(createUserDto, createProfileDto);
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.remove(+id);
  }
 
  
}