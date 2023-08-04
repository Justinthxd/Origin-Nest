import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ErrorResponse, LoginResponse, User } from './login_models';
import { ApiBadRequestResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';

@ApiTags('login')
@Controller('login')
export class LoginController {
  constructor(private auth: AuthService) {}

  @Post()
  @ApiResponse({ status: HttpStatus.OK, type: LoginResponse })
  @ApiBadRequestResponse({
    status: HttpStatus.BAD_REQUEST,
    type: ErrorResponse,
  })
  login(@Body() user: User): any {
    return this.auth.signIn(user.username, user.password);
  }
}
