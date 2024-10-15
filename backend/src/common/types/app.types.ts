export interface IVideoFormat {
  format_id: string;
  extension: string;
  resolution: string;
  fps: string | null;
  filesize: string | null;
  tbr: string | null;
  vcodec: string | null;
  vbr: string | null;
  acodec: string | null;
  abr: string | null;
  asr: string | null;
  more_info: string | null;
}
