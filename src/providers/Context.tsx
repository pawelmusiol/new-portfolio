import React from "react";
import { useState, createContext } from "react";

const AppState = {
    State: {
        Language: 'pl',
        BlobPosition: '0',
    },
    setLanguage: () => { },
    setBlobPosition: () => { },
}


interface IProps {
    children: JSX.Element[] | JSX.Element
}

interface IContextState {
    State: {
        Language:string;
        BlobPosition: string;
    }
    
    setLanguage: React.Dispatch<React.SetStateAction<string>>
    setBlobPosition:  React.Dispatch<React.SetStateAction<string>>
}

export const LanguageContext = createContext<IContextState>(AppState)

const CombinedProviders = ({ children }: IProps) => {
    const [Language, setLanguage] = useState<string>('pl')
    const [BlobPosition, setBlobPosition] = useState<string>('0')

    return (
        <LanguageContext.Provider value={{ State:{ Language: Language, BlobPosition: BlobPosition}, setLanguage, setBlobPosition }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default CombinedProviders