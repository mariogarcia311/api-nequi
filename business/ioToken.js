import fetch from 'isomorphic-unfetch';
import {decode as base64_decode, encode as base64_encode} from 'base-64';
const isDev = process.env.NODE_ENV !== 'production';

class IONequiToken {
  static BASE_URL ='https://oauth.sandbox.nequi.com/oauth2/token?grant_type=client_credentials';

  static URL = `${this.BASE_URL}`

 


  static post(content) {
    const promise = new Promise((resolve, reject) => {
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${base64_encode('12abcmt5gdk5bvsfbo7catg4k6:1e0ab7h5s689rnjkkb39ile9obt77vgo99vagvenqmbafbs88gul')}`
      };


      fetch(`${this.URL}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(content),
      })
        .then((data) => {
          switch (data.status) {
            case 200:
              resolve(data.json())
              break;
            case 403:
              // reject({ error: 'PASSWORD' });
              window.localStorage.clear();
              window.location.replace('/');
              break;
            default:
              reject({ error: 'SYSTEM' });
              break;
          }
        })
        .catch((error) => {
          console.log('ERROR', error);
          reject({ error: 'SYSTEM' });
        });
    });

    return promise;
  }

  


}

export default IONequiToken;
