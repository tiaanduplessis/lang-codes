/**
 * Check if val is Regex
 * @param {*} val Value to check
 */
export function isRegex (val) {
  return val && val instanceof RegExp
}

/**
   * Check if val is a string
   * @param {*} val Value to check
   */
export function isStr (val) {
  return val && typeof val === 'string'
}

/**
   * Check if val is array and non-empty
   * @param {*} arr Value to check
   */
export function isNonEmptyArr (arr) {
  return arr && Array.isArray(arr) && arr.length
}

/**
   * Check if any value of object matches a RegExp pattern
   * @param {Object} obj Object with values to check
   * @param {RegExp} pattern RegExp pattern to test object valus against
   */
export function hasMatch (obj = {}, pattern) {
  const vals = Object.values(obj)
  for (let i = 0; i < vals.length; i++) {
    if (pattern.test(vals[i])) {
      return true
    }
  }

  return false
};

/**
   * Get specified properties from a object
   * @param {Object} obj Object to get properties from
   * @param {*} props None or more properties to extract from object
   */
export function getMatchingProps (obj = {}, props) {
  if (isStr(props) && obj[props]) {
    return obj[props]
  } else if (isNonEmptyArr(props)) {
    props.reduce((acc, current) => {
      if (obj[current]) {
        acc[current] = obj[current]
      }

      return acc
    }, {})
  }

  return obj
}
