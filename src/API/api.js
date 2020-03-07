const proxyURL = 'https://cors-anywhere.herokuapp.com/';

const apiNewsCall = (country) => {

    const fetchURL = `http://newsapi.org/v2/top-headlines?country=${country}&q=coronavirus&apiKey=b23cc20188404ec8b852cc86145559e7`
    return fetch(proxyURL + fetchURL);
};

const apiCoronaCall = (country) => {

    const fetchURL = `https://corona.lmao.ninja/all`
    if(!country){
        return fetch(proxyURL + fetchURL).then(res => {return res.json()}).then(parsedJson => {return parsedJson});
    } 
}

export {apiNewsCall, apiCoronaCall};