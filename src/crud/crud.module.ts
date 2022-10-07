import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { authEntity } from 'src/auth/authEntity/authEntity';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { crudEntity } from './crudEntity/crudEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      // port: 3305,
      username: 'root',
      password: '',
      database: 'crud',
      entities: [crudEntity, authEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([crudEntity, authEntity]),
    AuthModule
  ],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
