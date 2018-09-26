import find from '../'

test('should find matching languages', () => {
  const result = find('zul')

  expect(find).toBeDefined()
  expect(result).toBeDefined()
  expect(result.name).toBe('Zulu')
})

test('should return all if no query specified', () => {
  expect(find()).toBeDefined()
  expect(Array.isArray(find())).toBeTruthy()
})

test('should find matching regex', () => {
  const result = find(/afr/)

  expect(result).toBeDefined()
  expect(result.name).toBe('Afrikaans')
})

test('should return only specified property', () => {
  const result = find(/afr/, { props: 'name' })

  expect(result).toBeDefined()
  expect(result).toBe('Afrikaans')
})

test('should return multiple matches', () => {
  const result = find(/af/, { props: 'name' })

  expect(result).toBeDefined()
  expect(result.length).toBe(2)
})
