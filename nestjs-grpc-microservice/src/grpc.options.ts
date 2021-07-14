import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};