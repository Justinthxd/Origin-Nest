import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Note } from './origin.models';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('origin')
@Controller('origin')
export class OriginController {
  @ApiBearerAuth('token')
  @UseGuards(JwtAuthGuard)
  @Get('get-notes')
  @ApiResponse({ status: 200, description: 'Get notes' })
  @ApiBadRequestResponse({ status: 400, description: 'Bad request' })
  getNotes() {
    return 'Notes';
  }

  @ApiBearerAuth('token')
  @UseGuards(JwtAuthGuard)
  @Post('insert-note')
  insertNote(@Body() note: Note) {
    return note;
  }
}
