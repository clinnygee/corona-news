const textShortener = (text, length) => {

    

    let newText = text.slice(0, length);

    // console.log(newUrlArray)

    // newUrlArray.push('...');

    // let newUrl = newUrlArray.join('');

    return newText + '...';
};

const countries =  [
    {
        country: 'Australia',
        code: 'Au'
    }, 
    {
        country: 'United States',
        code: 'Us',
    },
    {
        country: 'China',
        code: 'Ch'
    },
    {
        country: 'Brazil',
        code: 'br'
    },
    {
        country: 'Canada',
        code: 'ca'
    },
    {
        country: 'Germany',
        code: 'de'
    },
    {
        country: 'France',
        code: 'fr'
    },
    {
        country: 'Great Britain',
        code: 'gb',
    },
    {
        country: 'Greece',
        code: 'gr',
    },
    {
        country: 'Russia',
        code: 'ru'
    },
    {
        country: 'Japan',
        code: 'jp'
    },
    {
        country: 'South Korea',
        code: 'sk',
    },
    {
        country: "Thailand",
        code: 'th',
    },
    {
        country: 'Italy',
        code: 'it',
    },
    {
        country: 'India',
        code: 'in',
    }
];

const findObjectWithValue = (obj, value) => {
    return obj.country === value;
};

const filterCases = (cases, search) => {

    // search through the full array of objects return from the api. Find the object that 
    // corresponds to the search term.
        let holder = cases.filter(obj => {
            return obj.country === search;
        });

        console.log(holder)
        // remove the country key value pair from the return object
        if(holder.length >= 1){
            delete holder[0]['country'];
            return holder[0];
        }
        
        return null;
    

};

const toHumanReadableDT = (s) => {
//     var ms = s % 1000;
//     s = (s - ms) / 1000;
//     var secs = s % 60;
//     s = (s - secs) / 60;
//     var mins = s % 60;
//     var hrs = (s - mins) / 60;

//   return hrs + ':' + mins + ':' + secs + '.' + ms;
    let date = new Date(s);

    return date.toString();
}

export {textShortener, countries, findObjectWithValue, filterCases, toHumanReadableDT}