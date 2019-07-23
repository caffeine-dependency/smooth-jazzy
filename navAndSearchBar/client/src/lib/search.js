import axios from 'axios';
import _ from 'lodash';

const instantSearch = (query) => {
  return axios.get(`/api/search?query=${query}`)
    .then(({data}) => data)
    .catch((err) => "error retrieving products")
}

// this doesn't work because of promises I believe
const search = _.debounce(instantSearch, 1000);


export default instantSearch;