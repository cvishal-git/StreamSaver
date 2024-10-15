export const getFormatCmd = (url: string) => `yt-dlp -F ${url}`;

export const downloadAndMergeCmd = ({
  path,
  quality,
  url,
}: {
  quality: string;
  path: string;
  url: string;
}) =>
  `yt-dlp -f ${quality || 'bestvideo+bestaudio'} --merge-output-format mp4 -o ${path} ${url}`;
