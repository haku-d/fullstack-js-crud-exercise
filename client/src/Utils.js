export const destObject = (obj, keys) => {
  const newObj = {}
  keys.forEach(key => {
    if (obj[key]) {
      newObj[key] = obj[key]
    }
  })

  return newObj
}

export const isEqual = (firstObj, secondObj) => {
  const firstObjProps = Object.getOwnPropertyNames(firstObj)
  const secondObjProps = Object.getOwnPropertyNames(secondObj)

  if (firstObjProps.length !== secondObjProps.length) {
    return false
  }

  for (let i = 0; i < firstObjProps.length; i++) {
    if (firstObj[firstObjProps[i]] !== secondObj[secondObjProps[i]]) {
      return false
    }
  }

  return true
}
