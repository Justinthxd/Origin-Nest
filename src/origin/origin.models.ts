import { ApiProperty } from '@nestjs/swagger';

enum NoteStatus {
  DONE,
  IN_PROGRESS,
  TODO,
}

export interface INote {
  id: number;
  title: string;
  description: string;
  status: NoteStatus;
}

export class Note implements INote {
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ enum: ['DONE', 'IN_PROGRESS', 'TODO'] })
  status: NoteStatus;
}
