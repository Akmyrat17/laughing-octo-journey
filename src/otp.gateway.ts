import { Injectable } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@Injectable()
@WebSocketGateway({ cors: true })
export class OtpGateway {
    @WebSocketServer()
    server: Server;

    sendOtp(phone_number: number, otp: number) {
        this.server.emit('send-otp', { phone_number, otp });
    }
}
