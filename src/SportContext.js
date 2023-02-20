import React from 'react';

const SportContext = React.createContext('some sport');

const SportContextApp = () => {
    const [sport,setSport] = React.useState('basketball')
    return(
        <SportContext.Provider value={{sport}}>
            <SportConsumer />
        </SportContext.Provider>
    )
}

const SportConsumer = () => {
    const {sport} = React.useContext(SportContext);
    return <h2> You like {sport} </h2>
}

export default SportContextApp;