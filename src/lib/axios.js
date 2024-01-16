import Axios from 'axios';

const axios = Axios.create({
  // 배포 시 추가
  baseURL: 'https://api.sara-mara.com/'
});

export default axios;
