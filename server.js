const axios = require ('axios');
const url = "https://dare-nodejs-assessment.herokuapp.com/api/login"
const headers = {
    'Content-Type': 'application/json'
}
const data = {client_id:'dare',
client_secret:'s3cr3t'
}

const getToken = async () => {

    await axios.post(url, data, headers)
    .then(function (response) {
        Object.assign(data,{'token':response.data.token});
        console.log(response.data);
        // console.log (data)
    })
    .catch(function (error) {
        console.log(error);
    })
} 

const auth = async (token) => {
    var config = {
        method: 'get',
        url: 'https://dare-nodejs-assessment.herokuapp.com/api/clients',
        headers: { 
          'Authorization': `bearer ${token}`
        }
      };
      
      await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImRhcmUiLCJ3YXQiOjE2MTM3NzExMjcsImV4cCI6MTYxMzc3MTcyN30.vDtPkmj4MAEsUxwR35sogrC2WpG5vMGYsRQQWztVCxw";
getToken().then(()=> auth(token));


