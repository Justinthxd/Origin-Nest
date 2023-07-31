import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './login_models';

@Injectable()
export class LoginService {

    private user: User[] = [{
        id: 1,
        username: 'zaquiel',
        password: '123456',
        status: UserStatus.IN_PROGRESS,
    }];
    getUser() {
        return this.user;
    }

    createUser(value: User) {

        this.user.push(value);
        return value;
    }

}
