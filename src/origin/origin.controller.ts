import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { OriginService } from './origin.service';
import { Note } from './origin.models';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('origin')
@Controller('origin')
export class OriginController {
  constructor(private service: OriginService) {}

  @UseGuards(AuthGuard)
  @Get('get-notes')
  getNotes() {
    return 'Notes';
  }

  @UseGuards(AuthGuard)
  @Post('insert-note')
  insertNote(@Body() note: Note) {
    return note;
  }
}
