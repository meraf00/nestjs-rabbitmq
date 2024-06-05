import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange1',
          type: 'topic',
        },
        {
          name: 'exchange2',
          type: 'topic',
        },
      ],
      uri: 'amqp://localhost',
      connectionInitOptions: {
        wait: false,
      },
    }),
  ],
  exports: [RabbitMQModule],
})
export class RabbitMQWrapperModule {}
