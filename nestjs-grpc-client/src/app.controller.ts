import { Controller, Post, Body, OnModuleInit, Logger } from '@nestjs/common';
import { IGrpcService } from './grpc.interface';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { microserviceOptions } from './grpc.options';

@Controller()
export class AppController implements OnModuleInit {
  @Client(microserviceOptions)
  private client: ClientGrpc;
  private grpcService: IGrpcService;
  private logger = new Logger('AppController');

  onModuleInit() {
    this.grpcService = this.client.getService<IGrpcService>('AppController');
  }

  @Post('add')
  async accumulate(@Body('data') data: number[]) {
    this.logger.log(data);
    return this.grpcService.accumulate({ data });
  }
}
