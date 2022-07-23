import { inflate, deflate } from '../src';

describe('Zlib Inflate and Inflate test', () => {
  it('Inflate Test Case', () => {
    expect(inflate('eJwrTkxPLErJL87INDIwMnBIz03MzNFLzs8FAG5SCKE=')).toEqual(
      'sagardoshi2020@gmail.com'
    );
  });

  it('Deflate Test Case', () => {
    expect(deflate('sagardoshi2020@gmail.com')).toEqual(
      'eJwrTkxPLErJL87INDIwMnBIz03MzNFLzs8FAG5SCKE='
    );
  });
});
