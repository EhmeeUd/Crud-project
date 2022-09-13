import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { crudEntity } from './crudEntity/crudEntity';

@Injectable()
export class CrudService {
    constructor(@InjectRepository(crudEntity) private readonly crudRepository:
    Repository<crudEntity>){}

    // creating a post request
    async createUser(details:any): Promise<crudEntity >{

        return await this.crudRepository.save(details)

    }

    // findUser by Id
    async findUserById(id:number): Promise<crudEntity >{
        return this.crudRepository.findOneBy({id});
    }

    // Get all user
    async getAllUsers(getUser:any): Promise<crudEntity  []>{
        return await this.crudRepository.find(getUser)
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
