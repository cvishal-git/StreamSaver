import { Body, Controller, Get, Post, Query, Res } from '@nestjs/common';
import { YouTubeService } from './youtube.service';
import { Response } from 'express';
import { DownloadVideoDto } from './youtube.dto';

@Controller('youtube')
export class YouTubeController {
  constructor(private readonly youtubeService: YouTubeService) {}

  @Get('formats')
  async getFormats(@Query('url') url: string) {
    if (!url) {
      throw new Error('URL is required');
    }

    return await this.youtubeService.getVideoFormats(url);
  }

  @Post('download')
  async downloadVideo(
    @Body() downloadVideoDto: DownloadVideoDto,
    @Res() res: Response,
  ) {
    const { url, quality } = downloadVideoDto;
    try {
      const videoPath = await this.youtubeService.downloadVideo({
        url,
        quality,
      });
      res.download(videoPath);
    } catch (error) {
      res.status(500).send('Failed to download video');
    }
  }
}
