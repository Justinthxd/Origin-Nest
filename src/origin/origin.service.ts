import { Injectable } from '@nestjs/common';

@Injectable()
export class OriginService {
  getHello(value: any) {
    return `Value: ${value}`;
  }

  postHello(value: any) {
    return value;
  }
}
