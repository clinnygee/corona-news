import {filterCases} from '../Helpers';
const proxyURL = 'https://cors-anywhere.herokuapp.com/';

const apiNewsCall = (country) => {

    let fetchURL
    if(country !== 'Global'){
        fetchURL = `http://newsapi.org/v2/top-headlines?country=${country}&q=coronavirus&apiKey=b23cc20188404ec8b852cc86145559e7`;
    } else {
        fetchURL = `http://newsapi.org/v2/top-headlines?country=&q=coronavirus&apiKey=b23cc20188404ec8b852cc86145559e7`;
    }

    
    return fetch(proxyURL + fetchURL);
};

const apiUpliftingNewsCall = () => {
    let fetchUrl = 'reddit.com/r/upliftingnews.json';

    return fetch(proxyURL + fetchUrl);
}

const apiCoronaCall = (country) => {

    let fetchURL = '';
    if(!country){
        fetchURL = `https://corona.lmao.ninja/all`
        return fetch(proxyURL + fetchURL).then(res => {return res.json()}).then(parsedJson => {return parsedJson});
    } else {
        fetchURL = `https://corona.lmao.ninja/countries`;
        return fetch(proxyURL + fetchURL).then(res => {return res.json()}).then(parsedJson => {return parsedJson}).then(result => {return filterCases(result, country)});
    }
};

export {apiNewsCall, apiCoronaCall, apiUpliftingNewsCall};