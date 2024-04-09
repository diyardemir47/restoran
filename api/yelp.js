import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 8NlA6_i44rkEtWO1yNn9IY4brcD1aZAEGQuB9qDdx7o0Gl0zEz4wSyGxy0GyYbgAz1ku5BwdN-rFezKK6BDhXyVQ05PRFsT1_bMlN3VbGaXCKDL5gNIVnbshfYwVZnYx',
    }
})
