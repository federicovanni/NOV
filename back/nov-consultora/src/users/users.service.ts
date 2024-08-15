import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    getUsers() {return "get all users";}
}