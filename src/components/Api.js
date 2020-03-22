import axios from 'axios';

export const apiGetter = (url) => {
    axios.get(url)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }