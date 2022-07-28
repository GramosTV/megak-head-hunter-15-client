import { Score } from 'types';
export interface RawUser {
    email: string;
    courseCompletion: Score;
    courseEngagement: Score;
    projectDegree: Score;
    teamProjectDegree: Score;
    bonusProjectUrls: string[];
}