import IONequi from './io';

export default class qrCode {
    
  static fetchGenerateCodeQR = async (token,value) => {
    const 
      body={
        RequestMessage: {
          RequestHeader: {
            Channel: "PQR03-C001",
            RequestDate: "2021-11-03T20:26:12.654Z",
            MessageID: "1na15qdf21",
            ClientID: "12345",
            Destination: {
              ServiceName: "PaymentsService",
              ServiceOperation: "generateCodeQR",
              ServiceRegion: "C001",
              ServiceVersion: "1.2.0"
            }
          },
          RequestBody: {
            any: {
              generateCodeQRRQ: {
                code: "NIT_1",
                value: "1",
                reference1: "reference1",
                reference2: "reference2",
                reference3: "reference3"
              }
            }
          }
        }
      }
      
    

    try {
      const response = await IONequi.post('/-services-paymentservice-generatecodeqr', body,token);
      if(!!response){
      return response;
      }
    } catch (e) {
      console.log('ERROR FETCH GENERATE TOKEN', e);
      return 'error';
    }
    
  }
  

}
