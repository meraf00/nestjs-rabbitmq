import { Module } from '@nestjs/common';
import { ModuleOneModule } from './module-one/module-one.module';

import { ModuleTwoModule } from './module-two/module-two.module';
import { EventTriggerModule } from './event-trigger/event-trigger.module';
import { RabbitMQWrapperModule } from './shared/rabbitmq-wrapper/rabbitmq-wrapper.module';

@Module({
  imports: [
    RabbitMQWrapperModule,
    ModuleOneModule,
    ModuleTwoModule,
    EventTriggerModule,
  ],
})
export class AppModule {}
