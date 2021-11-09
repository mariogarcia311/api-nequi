import fetch from 'isomorphic-unfetch';


const isDev = process.env.NODE_ENV !== 'production';

class IONequi {
  static BASE_URL = 
    'https://api.sandbox.nequi.com/payments/v2';
  static URL = `${this.BASE_URL}`

 


  static post(url, content, aut) {
    const promise = new Promise((resolve, reject) => {
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${aut}`,
        'x-api-key':'ZxE9tijmN7ao7pCKT5tEw5v4Bhkf8jXO4aJWOeK9'
      };

 
      fetch(`${this.URL}${url}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(content),
        // body:content,

      })
        .then((data) => {
          switch (data.status) {
            case 200:
              resolve(data.json())
              break;
            case 401:
              // reject({ error: 'PASSWORD' });
              window.localStorage.clear();

              break;
            case 403:
              // reject({ error: 'PASSWORD' });
              window.localStorage.clear();

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

export default IONequi;
