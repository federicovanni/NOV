import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ExptesModule } from './exptes/exptes.module';
import { ExptesController } from './exptes/exptes.controller';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UsersModule, ExptesModule, AuthModule],
  controllers: [ExptesController, UsersController, AuthController],
  providers: [],
})
export class AppModule {}