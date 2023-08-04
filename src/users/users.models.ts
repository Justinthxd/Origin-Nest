import { ApiProperty } from '@nestjs/swagger';

class IUser {
  id: number;
  email: string;
  password: string;
}

class User extends IUser {
  @ApiProperty()
  id: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
}
