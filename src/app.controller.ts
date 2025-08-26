import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @HttpCode(HttpStatus.OK)
  @Post('sent-otp')
  async sentOtp(
    @Body('phone_number') phone_number: number,
  ) {
    return await this.appService.sentOtp(phone_number);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/verify-otp')
  async verifyOtp(
    @Body('phone_number') phone_number: string,
    @Body('otp') otp: string,
  ) {
    return await this.appService.verifyOtp(+phone_number, +otp);
  }
}
