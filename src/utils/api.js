import axios from "axios";


const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params = {
    key: 'AIzaSyCOHFRVmt5tVL2lwatgSnyA0lnPELzdKPQ',
    cx: '1627231e898954d5f',
}

export const fetchDataFromApi = async (payload) => {
const {data} = await axios.get(BASE_URL, {
    params: {...params, ...payload}
});
return data;
};
