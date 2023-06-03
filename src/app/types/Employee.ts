export interface Employee {
  ID: number;
  Name: string;
  Designation: string;
  Team: Team;
  Manager: number | null;
  Photo?: string;
}

export interface TreeNode {
  ID: 0;
  Name: string;
  Designation: string;
  Team: Team;
  Manager: number | null;
  Photo?: string;
  Members: NestedEmployee[]
}

export interface NestedEmployee extends Employee {
  ID: number;
  Name: string;
  Designation: string;
  Team: Team;
  Manager: number | null;
  Photo?: string;
  Members: NestedEmployee[];
}


export enum Team {
  FrontEnd = 'Front End',
  BackEnd = 'Back End',
  Management = 'Management'
};