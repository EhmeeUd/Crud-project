import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { crudEntity } from './crudEntity/crudEntity';
import { crudDto } from './DTO/crudDto';

@Injectable()
export class CrudService {
    constructor(@InjectRepository(crudEntity) private readonly crudRepository:
    Repository<crudEntity>){}

    // creating a post request
    async createUser(dto:crudDto): Promise<crudEntity >{

        return await this.crudRepository.save(dto)

    }

    // findUser by Id
    async findUserById(id:number): Promise<crudEntity >{
        return this.crudRepository.findOneBy({id});
    }

    // Get all user
    async getAllUsers(dto:crudDto): Promise<crudEntity>{
        const findUser = await this.crudRepository.save(dto)
        return findUser;
    }

    // updateUser by Id
    async updateUser(id:number, user): Promise<UpdateResult>{
        return this.crudRepository.update(id,user)
    }

    // Delete users
    async deleteUser(id: number): Promise<DeleteResult>{
        return await this.crudRepository.delete(id);
    }
}

//  The :Promise <this is where the callback takes place> it REpresents the completion 
// of an asynchronous operation.
// APromise for the completion of the callback.