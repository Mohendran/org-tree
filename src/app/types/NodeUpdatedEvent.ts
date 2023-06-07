import { TreeNode } from "./TreeNode";

export interface NodeUpdatedEvent {
  updatedTree?: TreeNode[];
  oldManager: number;
  newManager: number;
  nodeId: number;
}
