import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleOneService {
  @RabbitSubscribe({
    exchange: 'exchange2',
    routingKey: 'moduletwo.hello',
    queue: 'moduletwo-queue',
  })
  getHello(data: any): string {
    console.log('[App 2 ModuleOne Hello] Got: ', data);
    return 'Hello from App2 Module One!';
  }

  @RabbitSubscribe({
    exchange: 'exchange2',
    routingKey: 'moduletwo.goodbye',
    queue: 'moduletwo-queue',
  })
  getGoodbye(data: any): string {
    console.log('[App 2 ModuleOne Bye] Got: ', data);
    return 'Goodbye from App2 Module One!';
  }
}
