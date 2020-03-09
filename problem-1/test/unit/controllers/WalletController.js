require('chai').should();

describe('create API', () => {
  it('should return 200 after entry fee deducted successfully', async () => {
    const payload = {
      entryFee: 400,
      discount: 20
    };

    const res = await request.post('/api/v1/join-contest').send(payload);

    res.statusCode.should.equal(200);
    res.body.should.be.an('object');
  });
});