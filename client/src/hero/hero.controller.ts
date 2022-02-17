import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Get, Param, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable, Subject } from 'rxjs';
import { grpcClientOptions } from 'src/grpc-hero.options';
import { HeroService } from './hero.service';

interface Hero {
  id: number;
  name: string;
}

interface HeroById {
  id: number;
}

interface HeroServiceInterface {
  findOne(data: { id: number }): Observable<any>;
}

@Controller('hero')
export class HeroController implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;
  private heroService: HeroServiceInterface;

  onModuleInit() {
    this.heroService = this.client.getService<HeroServiceInterface>('HeroService');
  }

  @Get(':id')
  call(@Param() params): Observable<any> {
    return this.heroService.findOne({ id: +params.id });
  }
}
