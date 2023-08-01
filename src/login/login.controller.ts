import { Body, Controller, Post } from '@nestjs/common';
import { User } from './login_models';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';

@ApiTags('login')
@Controller('login')
export class LoginController {
  constructor(private auth: AuthService) {}

  @Post()
  login(@Body() user: User): any {
    return this.auth.signIn(user.username, user.password);
  }
}
