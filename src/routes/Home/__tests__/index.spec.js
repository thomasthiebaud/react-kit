import entry from '..'

describe('(Entry) Home', () => {
  it('should return a promise', () => {
    expect(typeof entry().then === 'function').toEqual(true)
  })
})
