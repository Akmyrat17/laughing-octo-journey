import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { OtpGateway } from './otp.gateway';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private otpGateway: OtpGateway
  ) { }

  async sentOtp(phone_number: number) {
    const otp = Math.floor(10000 + Math.random() * 90000);
    this.otpGateway.sendOtp(phone_number, otp);
    await this.cacheManager.set(phone_number.toString(), otp, 1 * 60 * 1000);
    return { success: true };
  }

  async verifyOtp(phone_number: number, otp: number) {
    const cacheOtp = await this.cacheManager.get(phone_number.toString());
    if (cacheOtp !== otp) throw new BadRequestException();
    return { success: true };
  }
}
