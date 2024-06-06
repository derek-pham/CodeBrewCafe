// AppContext.tsx
import { createContext, useState, ReactNode } from 'react';
import coffeeImg from './components/SideBar/coffee.png';
import { HomePageContextType } from './homePageContextTypes';

export const HomePageContext = createContext<HomePageContextType | undefined>(undefined);

const welcomeMessage = 'Here is the home of many small trinkets and widgets to enjoy.';

export function HomePageContextProvider({ children }: { children: ReactNode }) {
    const [displayTitle, setDisplayTitle] = useState('Welcome to CodeBrewCafe');
    const [displayImage, setDisplayImage] = useState(coffeeImg);
    const [isSelected, setIsSelected] = useState('');
    const [description, setDescription] = useState(welcomeMessage);
    const [pageLink, setPageLink] = useState('#');

    const value: HomePageContextType = {
        displayTitle,
        setDisplayTitle,
        displayImage,
        setDisplayImage,
        isSelected,
        setIsSelected,
        description,
        setDescription,
        pageLink,
        setPageLink
    };

    return (
        <HomePageContext.Provider value={value}>
            {children}
        </HomePageContext.Provider>
    );
}
