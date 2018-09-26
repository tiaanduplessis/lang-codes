import data from './data'
import { isRegex, hasMatch, getMatchingProps } from './utils'

export default function find (q = '', { props = undefined } = {}) {
  if (!q) {
    return data
  }

  const results = []

  const query = isRegex(q) ? q : new RegExp(`^${q}$`)

  data.forEach(lang => {
    if (hasMatch(lang, query)) {
      results.push(lang)
    }
  })

  if (results.length === 1) {
    return getMatchingProps(results[0], props)
  }

  return results.map(current => getMatchingProps(current, props))
}
