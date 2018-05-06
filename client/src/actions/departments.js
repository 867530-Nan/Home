export const addSubDepartment = (department) => {
  return({ type: 'ADD_SUB_DEPARTMENT', department: department })
}

export const addVisibleSubDepartment = (department) => {
  return({ type: 'ADD_VISIBLE_SUB_DEPARTMENT', department: department })
}