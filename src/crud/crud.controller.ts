import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { identity } from 'rxjs';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
    
    constructor(private readonly crudService:CrudService){}

    // we want to post to the Database
    @Post()
    async createPost(@Body()post){

        return await this.crudService.createUser(post);
    }

    //  we want to findUser by Id
    @Get('/:id')
    async findId(@Param('id')id:number){
        const findUser = this.crudService.findUserById(id);
        // if(!findUser){
        //     throw new HttpException('No User found with this is', 404)
        // }
        return findUser;
    }

    @Get()
    async getAllUser(getUser:any){
        return this.crudService.getAllUsers(getUser);
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
