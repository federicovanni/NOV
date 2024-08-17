import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
private users: User[] = []
findAll(): User[] { 
    return this.users;
}
save(newUser: User): void {
    this.users.push(newUser);
}
}