import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudController } from './crud.controller';
import { CrudService } from './crud.service';
import { crudEntity } from './crudEntity/crudEntity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3308,
      username: 'root',
      password: '',
      database: 'crud',
      entities: [crudEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([crudEntity])
  ],
  controllers: [CrudController],
  providers: [CrudService]
})
export class CrudModule {}
