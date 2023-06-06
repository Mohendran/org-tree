export interface Employee {
  ID: number;
  Name: string;
  Designation: string;
  Team: Team;
  Manager: number | null;
  Photo?: string;
}

export interface TreeNode {
  ID: number;
  Name: string;
  Designation: string;
  Team: Team;
  Manager: number | null;
  Photo?: string;
  IndirectManager?: boolean;
  Members: NestedEmployee[]
}

export interface NestedEmployee extends Employee {
  ID: number;
  Name: string;
  Designation: string;
  Team: Team;
  Manager: number | null;
  Photo?: string;
  IndirectManager?: boolean;
  Members: NestedEmployee[];
}


export enum Team {
  All = 'All Teams',
  FrontEnd = 'Front End',
  BackEnd = 'Back End',
  Management = 'Management'
};