// @fieldNodes is the query graph from resolver object info.fieldNodes
// @selectionPath is an array of fieldNames that represents the max depth of allowed selection
// if the last item in the @selectionPath is found the func returns false
export const isValidMaxSelectionDepth = (fieldNodes: any[], selectionPath: string[]): boolean => {
  if (selectionPath.length == 0) {
    return false;
  }

  const fieldName = selectionPath[0];

  const foundNode = fieldNodes.find((node: any) => {
    return node.name.value == fieldName;
  });

  if (foundNode) {
    selectionPath.shift();
    return isValidMaxSelectionDepth(foundNode.selectionSet.selections, selectionPath);
  }

  return true;
};
