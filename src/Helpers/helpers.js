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
    if(search === 'Global'){
    let holder = {cases: 0, todayCases: 0, deaths: 0, todayDeaths: 0, recovered: 0, critical: 0};

    cases.forEach(caseObj => {
        holder.cases += caseObj.cases;
        holder.todayCases += caseObj.todayCases;
        holder.deaths += caseObj.deaths;
        holder.todayDeaths += caseObj.todayDeaths;
        holder.recovered += caseObj.recovered;
        holder.critical += caseObj.critical
    });
        return holder;
    } else {
        let holder = cases.filter(obj => {
            return obj.country === search;
        });
        return holder;
    }

}

export {textShortener, countries, findObjectWithValue}