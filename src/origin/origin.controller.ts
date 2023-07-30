import { Body, Controller, Get, Post } from '@nestjs/common';
import { OriginService } from './origin.service';
import { Note } from './origin.models';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('origin')
@Controller('origin')
export class OriginController {
  constructor(private service: OriginService) {}

  @Get('get-notes')
  getNotes() {
    return 'Notes';
  }

  @Post('insert-note')
  insertNote(@Body() note: Note) {
    return note;
  }
}
