import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BcryptService } from './bcrypt.service';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from '@nestjs-modules/ioredis';
import JwtRedisService from './redis-jwt.service';
import { RemoveTokenBeforeLoginAgain } from './middleswares/removeTokenBeforeLogin.middleware';

@Module({
  imports: [
    JwtModule.register({
      global: true,
    }),
    RedisModule.forRootAsync({
      useFactory: () => ({
        type: 'single',
        url: 'redis://redis:6379',
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, BcryptService, JwtRedisService],
  exports: [BcryptService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RemoveTokenBeforeLoginAgain)
      .forRoutes({ path: '/auth/login', method: RequestMethod.POST });
  }
}
