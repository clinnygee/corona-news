import React, {createContext} from 'react';
import {apiCoronaCall} from './API';
import {countries} from './Helpers';

export const Context = createContext({
    searchTerm: 'Global',
    countryCode: '',
    darkMode: true,
    articles: null,
    allStats: null,
    getAllStats: () => {},
    updateSearchTerm: () => {},
    toggleDarkMode: () => {},
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
        console.log(countryObject);
        if(countryObject){
        this.setState({countryCode: countryObject?.code?  countryObject.code : 'all'});
        console.log(countryObject);
        } else {
            this.setState({countryCode: 'all'})
        }
    };

    toggleDarkMode = () => {
        this.setState({darkMode: !this.state.darkMode});
    }

    state = {
        articles: null,
        darkMode: true,
        allStats: null,
        getAllStats: this.getAllStats,
        searchTerm: 'Global',
        countryCode: '',
        updateSearchTerm: this.updateSearchTerm,
        toggleDarkMode: this.toggleDarkMode,
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