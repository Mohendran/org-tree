import { NestedTreePipe } from "src/app/common/nestedTree.pipe";
import { employees } from "src/app/mock/employee-list";
import { Team, TreeNode } from './../types';

describe('NestedTreePipe', () => {
  const pipe = new NestedTreePipe();

  it('should have a root Node', () => {
    const tree: TreeNode = pipe.transform(employees, Team.All);
    console.log(JSON.stringify(tree));
    expect(tree.Manager).toBe(null); // Denotes that there is no link to other Nodes as Parent
    expect(tree.ID).toBe(0); // Denotes the rootNode
    expect(tree.Members[0].Manager).toBe(0); // Denotes the manager is the root node
  });

  it('should be only Front End Employees, if Front End Team is selected', () => {
    const tree: TreeNode = pipe.transform(employees, Team.FrontEnd);
    expect(tree.Members[0].Name).toBe('Tony Stark'); // Checking whether the node has linked to the correct Employee
    expect(tree.Members[0].Team).toBe(Team.FrontEnd); // Checking the Team of the Employee is Front End
  });

});