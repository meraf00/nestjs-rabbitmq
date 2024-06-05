import { Module } from '@nestjs/common';
import { EventTriggerController } from './event-trigger.controller';
import { RabbitMQWrapperModule } from 'src/shared/rabbitmq-wrapper/rabbitmq-wrapper.module';

@Module({
  imports: [RabbitMQWrapperModule],
  controllers: [EventTriggerController],
})
export class EventTriggerModule {}
