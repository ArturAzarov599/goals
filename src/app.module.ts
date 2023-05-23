import { Module, Scope, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { join } from 'path';
import { GoalsModule } from './modules/goals/goals.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.local', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const host = configService.get<string>('DB_HOST');
        const port = configService.get<number>('DB_PORT');
        const username = configService.get<string>('DB_USERNAME');
        const password = configService.get<string>('DB_PASSWORD');
        const database = configService.get<string>('DATABASE');

        return {
          type: 'postgres',
          host,
          port: +port,
          username,
          password,
          database,
          entities: [join(__dirname, '/entities/*entity.js')],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    GoalsModule,
    TasksModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  exports: [],
})
export class AppModule {}
