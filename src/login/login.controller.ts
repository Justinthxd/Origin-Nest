import { Body, Controller, Get, Post, Query, Redirect } from '@nestjs/common';
import { LoginService } from './login.service';
import { User } from './login_models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('login')
@Controller('login')
export class LoginController {
  constructor(private loginservice: LoginService) {}

  @Get('user-login')
  getValue(): any {
    return this.loginservice.getUser();
  }

  @Post('add-user')
  createUser(@Body() newUser: User): any {
    return this.loginservice.createUser(newUser);
  }

  //   @Get('you')
  //   @Redirect('https://www.youtube.com', 302)
  //   getDocs(@Query('version') version) {
  //     return { url: 'https://www.youtube.com' };
  //   }
}
