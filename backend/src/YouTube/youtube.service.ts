import { Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { DownloadVideoDto } from './youtube.dto';
import { promisify } from 'util';
import * as common from '../common';

const execPromise = promisify(exec);

@Injectable()
export class YouTubeService {
  async getVideoFormats(url: string): Promise<any> {
    const { getFormatCmd, parseYtDlpOutput } = common;

    try {
      const { stdout } = await execPromise(getFormatCmd(url));
      return parseYtDlpOutput(stdout);
    } catch (error) {
      console.error('Error fetching video formats:', error);
      throw new Error('Failed to fetch video formats');
    }
  }

  async downloadVideo(downloadVideoDto: DownloadVideoDto): Promise<string> {
    const { url, quality } = downloadVideoDto;
    const { downloadAndMergeCmd } = common;
    // Set the downloads directory
    const downloadsDir = join(__dirname, '..', 'downloads');
    if (!existsSync(downloadsDir)) {
      mkdirSync(downloadsDir);
    }

    // Set the output path
    const videoId = url.split('v=')[1]; // Simple method to extract video ID
    const videoPath = join(downloadsDir, `${videoId}.mp4`);

    return new Promise((resolve, reject) => {
      const command = downloadAndMergeCmd({ url, path: videoPath, quality });

      exec(command, (error, _, stderr) => {
        if (error) {
          console.error('Error downloading video:', stderr);
          return reject(error);
        }
        resolve(videoPath);
      });
    });
  }
}
