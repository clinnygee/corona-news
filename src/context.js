import React, {createContext} from 'react';
import {apiCoronaCall, apiNewsCall} from './API';
import {countries, findObjectWithValue} from './Helpers';

const Context = createContext({
    searchTerm: 'Global',
    countryCode: 'all',
    articles: null,
    darkMode: false,
    allStats: null,
    getAllStats: () => {},
    updateSearchTerm: () => {},
});

export class Provider extends React.Component {

    

    getAllStats = () => {
        apiCoronaCall().then(response => {this.setState({allStats: response})})
    };

    updateSearchTerm = (searchTerm) => {
        this.setState({searchTerm: searchTerm});
        this.updateCountryCode(searchTerm);
        console.log(searchTerm)
    };

    updateCountryCode = (searchTerm) => {
        let countryObject = countries.find(({country}) => country === searchTerm);
        this.setState({countryCode: countryObject.code});
        // console.log(countryObject);
    }

    state = {
        articles: null,
        darkMode: true,
        allStats: null,
        getAllStats: this.getAllStats,
        searchTerm: 'Global',
        countryCode: 'all',
        updateSearchTerm: this.updateSearchTerm,
    };

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
};

export const Consumer = Context.Consumer;