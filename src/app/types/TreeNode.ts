import { Employee } from "./Employee";

export interface TreeNode extends Employee {
  IndirectManager?: boolean;
  Members: TreeNode[];
}
