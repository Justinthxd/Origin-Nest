import { ApiProperty } from '@nestjs/swagger';

export enum UserStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  PENDING = 'PENDING',
  DONE = 'DONE',
}

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty({ enum: ['IN_PROGRESS', 'PENDING', 'DONE'] })
  status: UserStatus;
}

export class LoginResponse {
  @ApiProperty()
  access_token: string;
}

export class ErrorResponse {
  @ApiProperty({ required: false })
  statusCode: number;

  @ApiProperty({ required: false })
  message: string;

  @ApiProperty({ required: false })
  error: string;
}
