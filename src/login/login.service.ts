import { Injectable } from '@nestjs/common';
import { User, UserStatus } from './login_models';

@Injectable()
export class LoginService {
  login() {
    return 'login';
  }
}
