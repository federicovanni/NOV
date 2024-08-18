import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ExptesModule } from './exptes/exptes.module';
import { ExptesController } from './exptes/exptes.controller';
import { UsersController } from './users/users.controller';
import { AuthController } from './auth/auth.controller';
import { UsersService } from './users/users.service';
import { ExptesService } from './exptes/exptes.service';
import { AuthService } from './auth/auth.service';
import { UsersRepository } from './users/user.repository';
import { ExpteRepository } from './exptes/expte.repository';

@Module({
  imports: [UsersModule, ExptesModule, AuthModule],
  controllers: [ExptesController, UsersController, AuthController],
  providers: [UsersService, ExptesService, AuthService, UsersRepository, ExpteRepository],
})
export class AppModule {}