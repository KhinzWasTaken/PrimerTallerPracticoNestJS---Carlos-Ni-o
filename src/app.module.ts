import { Module } from '@nestjs/common';
import { RickAndMortyModule } from './rick-and-morty/rick-and-morty.module';

@Module({
  imports: [
    RickAndMortyModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
