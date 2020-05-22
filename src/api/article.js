import axios from 'axios';

export default axios.create({
    baseURL: 'https://sariagri.id/api',
    /*headers:{
        Authorization: 'Bearer id'
    }*/
})