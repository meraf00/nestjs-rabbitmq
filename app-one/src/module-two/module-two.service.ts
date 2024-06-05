import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleTwoService {
  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'moduletwo.hello',
    queue: 'moduletwo-queue',
  })
  getHello(data: any): string {
    console.log('[AppOne ModuleTwo Hello] Got: ', data);
    return 'Hello from Module Two!';
  }

  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'moduletwo.goodbye',
    queue: 'moduletwo-queue',
  })
  getGoodbye(data: any): string {
    console.log('[AppOne ModuleTwo Bye] Got: ', data);
    return 'Goodbye from Module Two!';
  }
}
