import { Module } from '@nestjs/common';
import { ModuleTwoService } from './module-two.service';
import { RabbitMQWrapperModule } from 'src/shared/rabbitmq-wrapper/rabbitmq-wrapper.module';

@Module({
  imports: [RabbitMQWrapperModule],
  providers: [ModuleTwoService],
})
export class ModuleTwoModule {}
