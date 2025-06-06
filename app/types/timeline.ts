import { ReactNode } from 'react';

export interface TimelineDataStat {
  name: string;
  level: number;
}

export interface TimelineDataEntry {
  id: string;
  dateString: string;
  title: string;
  location: string;
  companyName: string;
  imgSrc: string | any; // Can be string URL or imported image
  stats: TimelineDataStat[];
  description: ReactNode;
  readMoreText?: ReactNode;
  bullets: ReactNode[];
}

export type TimelineData = TimelineDataEntry[];