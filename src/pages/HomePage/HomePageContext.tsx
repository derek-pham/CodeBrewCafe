// AppContext.js
import React, { createContext, useState, useContext } from 'react';
import coffeeImg from './components/SideBar/coffee.png'

export const HomePageContext = createContext();

export function HomePageContextProvider({ children }) {
    const [displayTitle, setDisplayTitle] = useState(null);
    const [displayImage, setDisplayImage] = useState(coffeeImg);
    const [isSelected ,setIsSelected] = useState('')

    const value = {
        displayTitle,
        setDisplayTitle,
        displayImage,
        setDisplayImage,
        isSelected,
        setIsSelected
    };

    return (
        <HomePageContext.Provider value={value}>
            {children}
        </HomePageContext.Provider>
    );
}
