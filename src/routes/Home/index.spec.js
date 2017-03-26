import entry from '.'

describe('(Entry) Home', () => {
  it.only('should return a promise', () => {
    expect(typeof entry().then === 'function').toEqual(true)
  })
})
