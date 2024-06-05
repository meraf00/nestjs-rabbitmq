import { Module } from '@nestjs/common';
import { ModuleOneService } from './module-one.service';
import { RabbitMQWrapperModule } from 'src/shared/rabbitmq-wrapper/rabbitmq-wrapper.module';

@Module({
  imports: [RabbitMQWrapperModule],
  providers: [ModuleOneService],
})
export class ModuleOneModule {}
