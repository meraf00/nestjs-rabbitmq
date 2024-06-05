import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleOneService {
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'moduleone.hello',
    queue: 'moduleone-queue',
  })
  getHello(data: any): string {
    console.log('[AppOne ModuleOne Hello] Got: ', data);
    return 'Hello from Module One!';
  }

  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'moduleone.goodbye',
    queue: 'moduleone-queue',
  })
  getGoodbye(data: any): string {
    console.log('[AppOne ModuleOne Bye] Got: ', data);
    return 'Goodbye from Module One!';
  }
}
