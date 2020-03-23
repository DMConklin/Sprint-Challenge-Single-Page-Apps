import axios from 'axios';

export const APIGetter = (url) => {
    axios.get(url)
    .then(response => console.log(response.data.results))
    .catch(err => console.log(err))
  }