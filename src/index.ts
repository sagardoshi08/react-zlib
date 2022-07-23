var zlib = require('zlib');

export const inflate = (token: string) => {
  return zlib.inflateSync(Buffer.from(token, 'base64')).toString(); //decompress
};

export const deflate = (token: string) => {
  return zlib.deflateSync(token).toString('base64'); //compress
};
