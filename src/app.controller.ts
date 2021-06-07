import { Controller, Get,Delete,Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/home')
  getHello(): string {
    return this.appService.getHello()
  }
  
  @Get()
  getHello1(): string {
    return this.appService.getHello()
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    console.log(id)
    return `<h1>${id}<h1>`
  }
}

