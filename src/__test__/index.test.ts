import { testfn } from ".."

describe('this is test jest', () => {
  it('testfunction', () => {
    expect(testfn(4,true)).toBe("number")
  })
})