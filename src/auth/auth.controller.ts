import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
    constructor (private readonly authService: AuthService, private jwtservice:JwtService) {}

    @Post('signup')
    async signUp(@Body('email')email, @Body('password') password){
        
        // Let's hash our password by storing it in a variable
        const saltOrRounds = 10;
        const passwords = 'password';
        const hashPassword = await bcrypt.hash(password, 12)

        const createUsers = this.authService.signUp({
            email,
            password:hashPassword
        })

        // WE WANT TO STOREOUR DATA IN  AS A JWT
        const jwt = await this.jwtservice.signAsync({id: (await createUsers).id})
        return jwt;
    }
}
