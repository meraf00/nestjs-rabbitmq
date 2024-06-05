import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Body, Controller, Post } from '@nestjs/common';
import { SendEventDto } from './event.dto';

@Controller('event')
export class EventTriggerController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post()
  async triggerEvent(@Body() eventDto: SendEventDto) {
    const { exchange, routingKey, message } = eventDto;

    await this.amqpConnection.publish(exchange, routingKey, {
      message,
    });

    return 'Event triggered! Check terminal for logs.';
  }
}
