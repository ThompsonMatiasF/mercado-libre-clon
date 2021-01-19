import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

if(!process.env.REACT_APP_ENABLE_MOCK){
  axios.defaults.baseURL = `${process.env.REACT_APP_BACK_PROTOCOL}://${process.env.REACT_APP_BACK_DOMAIN}`;
}

const mock = new MockAdapter(axios, { delayResponse: 2000 });


export default mock;
