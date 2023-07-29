import { Controller, Get, Logger, Param, Req, Request } from '@nestjs/common';

@Controller('origin')
export class OriginController {
  @Get()
  init(@Request() req): string {
    return req.body;
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}
