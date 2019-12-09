import axios from 'axios';
// const apiKey = 'IGLOYrMAV8KRjzGzj6vvF3dGx2WlASHZ'
// const getImg = axios.create({
//     baseURL: 'https://api.giphy.com/v1'
// });
// const searchPrefix='https://api.giphy.com/v1/gifs/search?api_key=IGLOYrMAV8KRjzGzj6vvF3dGx2WlASHZ&';
export const getMenu = data => axios({
    method: 'get',
    url: '/getMenu',
    'Content-Type': 'application/json',
});
// export const apiImgId = data => getImg.get(`/gifs?api_key=${apiKey}&ids=${data.ids}`);