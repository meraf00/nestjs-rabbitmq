import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SendEventDto {
  @ApiProperty()
  @IsString()
  exchange: string;

  @ApiProperty()
  @IsString()
  routingKey: string;

  @ApiProperty()
  @IsString()
  message: string;
}
