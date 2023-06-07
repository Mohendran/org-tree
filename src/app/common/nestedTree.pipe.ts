import { Pipe, PipeTransform } from '@angular/core';
import { Employee, Team, TreeNode } from '../types';

@Pipe({
  name: 'nestedTree',
  pure: true
})
export class NestedTreePipe implements PipeTransform {

  transform(employees: Employee[], selectedTeam: Team): any {

    // Identify the managers and link the employees with their managers as a Nested Object.
    const buildHierarchy = (managerId: number): TreeNode[] => {
      const members: TreeNode[] = employees
        .filter((emp) => emp.Manager === managerId)
        .map((emp) => ({
          ...emp,
          Members: buildHierarchy(emp.ID)
        }));

      return members;
    }

    const buildTeamHierarchy = (members: TreeNode[], selectedTeam: Team): TreeNode[] => {
      const differentTeamEmployees = members.filter(emp => emp.Team !== selectedTeam);
      const sameTeamDirectEmployees = members.filter(emp => emp.Team === selectedTeam).map(emp => ({
        ...emp,
        Members: [...buildTeamHierarchy(emp.Members, selectedTeam)],
        IndirectManager: false
      }));

      // I'm recursively moving the members who have a manager of a different team up the hierarchy and removing the manager(different team) from the hierarchy.
      const indirectEmployees = differentTeamEmployees
        .flatMap(emp => [...buildTeamHierarchy(emp.Members, selectedTeam)])
        .map(emp => ({
          ...emp,
          IndirectManager: true
        }));

      return [...sameTeamDirectEmployees, ...indirectEmployees];
    }

    const generateHierarchy = (): TreeNode => {
      // Linking the members to their managers to form a Nested Tree
      const members = buildHierarchy(0);

      // This is a structure modified to handle the Organization Tree with a Start Node.
      // Why do we need a start Node? To make any employee the root node of the entire organization
      const tree: TreeNode = {
        ID: 0, // Denotes Start Node
        Name: '',
        Designation: '',
        Team: <Team><unknown>null,
        Manager: null,
        Members: [...members]
      };

      return tree;
    }

    const hierarchy = generateHierarchy();
    if (selectedTeam !== Team.All) {
      // We are only reusing the startNode Object and the other values are recalculated
      hierarchy.Members = buildTeamHierarchy(hierarchy.Members, selectedTeam);
    }

    return hierarchy;
  }
}