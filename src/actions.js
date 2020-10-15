export const increment = (dataSet = {}) => ({
  type: 'Add',
  dataSet
})

export const decrement = (dataSet = []) => ({
  type: 'Detele',
  dataSet
})
