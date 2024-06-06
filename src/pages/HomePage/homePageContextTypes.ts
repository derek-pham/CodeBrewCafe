// contextTypes.ts
export interface HomePageContextType {
    displayTitle: string;
    setDisplayTitle: (value: string) => void;
    displayImage: string;
    setDisplayImage: (value: string) => void;
    isSelected: string;
    setIsSelected: (value: string) => void;
    description: string;
    setDescription: (value: string) => void;
    pageLink: string;
    setPageLink: (value: string) => void;
}