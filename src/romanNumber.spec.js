const { translate } = require('./romanNumber');

describe('Roman Number', () => {
  it('should return I for 1', () => {
    const res = translate(1);
    expect(res).toBe('I')
  })
})
