import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleTwoService {
  @RabbitSubscribe({
    exchange: 'exchange2',
    routingKey: 'moduletwo.hello',
    queue: 'moduletwo-queue',
  })
  getHello(data: any): string {
    console.log('[ModuleTwo Hello] Got: ', data);
    return 'Hello from App2 Module Two!';
  }

  @RabbitSubscribe({
    exchange: 'exchange2',
    routingKey: 'moduletwo.goodbye',
    queue: 'moduletwo-queue',
  })
  getGoodbye(data: any): string {
    console.log('[App2 ModuleTwo Bye] Got: ', data);
    return 'Goodbye from App2 Module Two!';
  }
}
