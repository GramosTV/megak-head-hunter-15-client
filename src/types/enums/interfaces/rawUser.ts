import {BoolValues} from 'types';
export interface RawUser {
    email: string;
    courseCompletion: BoolValues | null;
    courseEngagement: BoolValues | null;
    projectDegree: BoolValues | null;
    teamProjectDegree: BoolValues | null;
    bonusProjectUrls: string[];
}