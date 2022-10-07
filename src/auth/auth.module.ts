import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { authEntity } from './authEntity/authEntity';

@Module({
  imports: [TypeOrmModule.forFeature([authEntity]),
    JwtModule.register({
      secret: "SECRET",
      signOptions:{expiresIn: "1d"}
    })
],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
