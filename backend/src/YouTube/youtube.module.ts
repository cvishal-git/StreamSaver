import { Module } from '@nestjs/common';
import { YouTubeController } from './youtube.controller';
import { YouTubeService } from './youtube.service';

@Module({
  imports: [],
  controllers: [YouTubeController],
  providers: [YouTubeService],
})
export class YouTubeModule {}
