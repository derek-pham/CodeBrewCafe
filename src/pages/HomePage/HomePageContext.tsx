// AppContext.js
import React, { createContext, useState, useContext } from 'react';
import coffeeImg from './components/SideBar/coffee.png'

export const HomePageContext = createContext();

const welcomeMessage = 'Here is the home of many small trinkets and widgets to enjoy.'

export function HomePageContextProvider({ children }) {
    const [displayTitle, setDisplayTitle] = useState('Welcome to CodeBrewCafe');
    const [displayImage, setDisplayImage] = useState(coffeeImg);
    const [isSelected ,setIsSelected] = useState('')
    const [description ,setDescription] = useState(welcomeMessage)

    const value = {
        displayTitle,
        setDisplayTitle,
        displayImage,
        setDisplayImage,
        isSelected,
        setIsSelected,
        description,
        setDescription
    };

    return (
        <HomePageContext.Provider value={value}>
            {children}
        </HomePageContext.Provider>
    );
}
