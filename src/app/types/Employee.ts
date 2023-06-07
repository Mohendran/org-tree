import { Team } from "./Team";

export interface Employee {
  ID: number;
  Name: string;
  Designation: string;
  Team: Team;
  Manager: number | null;
  Photo?: string;
}
