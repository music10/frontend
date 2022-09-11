import { createContext } from 'react';
import { IStatistics } from '../types';

export interface IStatisticsContext {
  statistics: IStatistics;
  updateStatistics: (guess: number) => void;
  clearStatistics: () => void;
}

export const StatisticsContext = createContext({} as IStatisticsContext);