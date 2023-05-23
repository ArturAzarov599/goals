import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { AuthEntity } from 'src/entities/auth.entity';
import { AuthRepository } from 'src/repositories/auth.repository';
import { AuthService } from 'src/services/auth/auth.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthEntity]),
    UserModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService): JwtModuleOptions => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '6000s' },
        global: true,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService, AuthRepository],
  controllers: [AuthController],
  exports: [JwtModule],
})
export class AuthModule {}
