import { Injectable } from '@angular/core';
import { UserProvider } from '../providers/user.provider';
import { User } from '../types/user';
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userProvider: UserProvider) {}

  public async getUsers(): Promise<User[]> {
    return await this.userProvider.getUsers();
  }

  public async postUser(user: any): Promise<any> {
    const result = await this.userProvider.createUser(user);
    console.log(result);
    return result;
  }
}
