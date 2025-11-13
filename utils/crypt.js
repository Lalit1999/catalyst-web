import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const secretKey = process.env.NEXT_PUBLIC_SECRET; 

const encrypt = data => AES.encrypt(data, secretKey).toString()

const decrypt = data => AES.decrypt(data, secretKey).toString(Utf8)

export { encrypt, decrypt} ;
