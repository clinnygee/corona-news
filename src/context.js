import React, {createContext} from 'react';
import {apiCoronaCall, apiNewsCall} from './API'

const Context = createContext({
    articles: null,
    darkMode: false,
    allStats: null,
    getAllStats: () => {},
});

export class Provider extends React.Component {

    

    getAllStats = () => {
        console.log(apiCoronaCall());
    }

    state = {
        articles: null,
        darkMode: true,
        allStats: null,
        getAllStats: this.getAllStats,
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