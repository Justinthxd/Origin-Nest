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
