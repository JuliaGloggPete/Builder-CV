export interface ICV {
  generalInfo: IGeneralInfo;
  technicalSkills: ISkill[];
  educationInfo: IEducationInfo[];

  workExpierienceConsid: IWorkExperience[];
  overAllResume: IRecapResume;
  language: string;
}
export interface IGeneralInfo {
  firstName: string;
  lastName: string;
  levelOfCompetence: string;
  jobTitle: string;
  yearsInTheField: string;
  imageUrl?: string;
  shortDescriptionPerson: string;
}
export interface ISkill {
  skill: string;
  skillCategory?: string;
  proficiency: Number |undefined;
}

export interface IWorkExperience {
  workperiodStartDate: string;
  workperiodEndDate: string;
  roleAtWork: string;
  employmentType: string;
  technicsUsed?: ISkill[];
  workDescription: string;
}


export interface IRecapResume {
  educationShortDescription: string;
  courses: ICourses[];
  furtherWorkExperience: IWorkExperience[];
  languagages: ILanguage[];
  certificates: ICertificate[];
}

export interface ICourses {
  courseStartDate: string;
  courseEndDate: string;
  courseSkill?: string;
}

export interface IEducationInfo {
  educationStartDate: string;
  educationEndDate: string;
  educationPlace: string;
  educationDescription: string;
}


type ICertificate = string;

type ILanguage = string;


