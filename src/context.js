import React, {createContext} from 'react';
import {apiCoronaCall, apiNewsCall} from './API'

const Context = createContext({
    searchTerm: 'Global',
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
        this.setState({searchTerm: searchTerm})
        console.log(searchTerm)
    }

    state = {
        articles: null,
        darkMode: true,
        allStats: null,
        getAllStats: this.getAllStats,
        searchTerm: 'Global',
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