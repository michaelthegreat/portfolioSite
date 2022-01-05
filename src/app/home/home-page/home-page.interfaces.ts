export interface IWorkExperienceItem {
    companyName: string;
    position: string;
    description: string;
    image:string;
    dateStarted : string;
    dateEnded : string;
    skills: string[];
 }

 export interface IPortfolioItem {
    title: string;
    description: string;
    image:string;
    url: string;
    skills: string[];
  }