import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { authEntity } from './authEntity/authEntity';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(authEntity) private readonly authRepository:
    Repository<authEntity>){}
    signUp(details: any): Promise<authEntity>{
        return this.authRepository.save(details);
    }
}
