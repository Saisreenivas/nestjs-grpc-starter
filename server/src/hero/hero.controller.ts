import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable, Subject } from 'rxjs';

interface Hero {
  id: number;
  name: string;
}

interface HeroById {
  id: number;
}

@Controller()
export class HeroController {
  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any, any>): Hero {
    console.log('findOne Called with payload: ', data, metadata.toJSON());
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }

  @GrpcStreamMethod('HeroService', 'FindMany')
  findMany(data$: Observable<HeroById>): Observable<Hero> {
    console.log('find many called');
    const hero$ = new Subject<Hero>();
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];

    const onNext = (heroById: HeroById) => {
      const item = items.find(({ id }) => id === heroById.id);
      hero$.next(item);
    };
    const onComplete = () => {
      console.log(hero$);
      return hero$.complete();
    };
    data$.subscribe({
      next: onNext,
      complete: onComplete,
    });

    return hero$.asObservable();
  }
}
