import Axios from 'axios';

const axios = Axios.create({
  // 배포 시 추가
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default axios;
