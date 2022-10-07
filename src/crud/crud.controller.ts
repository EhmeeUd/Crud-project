import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { CrudService } from './crud.service';
import { crudDto } from './DTO/crudDto';


@Controller('crud')
export class CrudController {
    
    constructor(private readonly crudService:CrudService){}

    // we want to post to the Database
    @Post()
    async createPost(@Body() dto: crudDto){
  return await this.crudService.createUser(dto);
    }

    //  we want to findUser by Id
    @Get('/:id')
    async findId(@Param('id')id:number){
        const findUser = await this.crudService.findUserById(id);
        // if(!findUser){
        //     throw new HttpException('No User found with this is', 404)
        // }
        return findUser;
    }

    @Get()
    async getAllUser(dto:crudDto){
        return this.crudService.getAllUsers(dto);
    }

    // we want to update
    @Put('/:id')
    async updateUserById(
        @Param('id')id,
        @Body()body
    ){
        return await this.crudService.updateUser(id, body);
    }

    // we want to delete user by id
    @Delete('/:id')
    async deleteUserById(@Param('id')id){
        return await this.crudService.deleteUser(id)
    }
}
