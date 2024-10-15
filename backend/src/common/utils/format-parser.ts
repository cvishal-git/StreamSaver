import { IVideoFormat } from '../types/app.types';

// Helper function to get column indices based on the header
const getColumnIndices = (headerLine: string) => {
  const columns = headerLine.split(' ');
  const indexArr = [];
  let cumulativeOffset = 0;

  for (let i = 0; i < columns.length; i++) {
    const item = columns[i];
    if (!item) continue; // Skip empty values

    const idx = headerLine.indexOf(item, cumulativeOffset);
    indexArr.push({ idx, item });
    cumulativeOffset = idx + item.length; // Update offset to ensure correct index for next item
  }

  return indexArr;
};

// Helper function to extract values based on column indices
const extractValuesFromLine = (line: string, indexArr: any[]) => {
  const lineArr = line.split('');
  const parts = [];

  for (let j = 0; j < indexArr.length; j++) {
    const item = indexArr[j];
    if (item.item === '|' || indexArr.length - 1 === j) continue; // Skip separators and last element

    const nextItem =
      indexArr[j + 1]?.item === '|' ? indexArr[j + 2] : indexArr[j + 1];

    const data = lineArr.slice(item.idx, nextItem?.idx).join('');
    parts.push(data.trim() ?? null);
  }

  return parts;
};

// Main function to parse yt-dlp output into a structured format
export const parseYtDlpOutput = (output: string): IVideoFormat[] => {
  const lines = output.split('\n');
  const formats: IVideoFormat[] = [];

  // Find the header line where the format table starts
  const formatStartIndex = lines.findIndex((line) =>
    line.includes('ID  EXT   RESOLUTION'),
  );
  if (formatStartIndex === -1) return formats; // Return empty array if no formats are found

  const indexArr = getColumnIndices(lines[formatStartIndex]);

  // Process each line after the header (skipping separator lines)
  for (let i = formatStartIndex + 2; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue; // Skip empty lines

    const parts = extractValuesFromLine(line, indexArr);

    // Map parts of the line to corresponding fields, with fallback to null for missing fields
    const format: IVideoFormat = {
      format_id: parts[0],
      extension: parts[1],
      resolution: parts[2],
      fps: parts[3],
      filesize: parts[5],
      tbr: parts[6],
      vcodec: parts[8],
      vbr: parts[9],
      acodec: parts[10],
      abr: parts[11],
      asr: parts[12],
      more_info: parts[13],
    };

    formats.push(format);
  }

  return formats;
};
