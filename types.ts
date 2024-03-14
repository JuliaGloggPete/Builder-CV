export interface ICV {

  generalInfo: IGeneralInfo;
  educationInfo: IEducationInfo[];
  technicalSkills: ISkill[];
  workExpierienceConsid: IWorkExperience[];
  overAllResume: IRecapResume;
  language: string;
}

export interface ISkill{
  skill: string
  skillCategory?: string
}

export interface IRecapResume{
  educationShortDescription: string;
  courses: ICourses[],
  furtherWorkExperience : IWorkExperience[]
}

export interface ICourses{
  courseStartDate: IDate;
  courseEndDate: IDate;
  courseSkill?: string
}

export interface IEducationInfo {
  
  educationStartDate: IDate;
  educationEndDate: IDate;
  educationPlace: string;
  educationDescription: string;
}
export interface IGeneralInfo {
  firstName: string;
  lastName: string;
  levelOfCompetence: string;
  jobTitle: string;
  workingInFieldSince: IDate;
  imageUrl? : string;
  shortDescription: string;
}

export interface IWorkExperience{
  workperiodStartDate: IDate;
  workperiodEndDate: IDate;
  roleAtWork: string;
  employmentType: string;
  technicsUsed?: string[];
  workDescription: string;
  workReference?: IWorkReference

}
export interface IWorkReference{
refereeName : string;
refereeTelephone: string;
refereeMail: string;

}

//type ISkill = string;

export interface IDate {
  month: string;
  year: string;
}
