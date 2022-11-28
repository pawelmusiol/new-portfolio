import React from "react";
import { useState, createContext } from "react";

const AppState = {
    context: {
        colors: {
            A: "#FFE486",
            B: "#FEB3D9",
        }
    },
    setContext: () => { }
}


interface IProps {
    children: JSX.Element[] | JSX.Element
}

interface IContextState {
    context: {
        colors: {
            A: string,
            B: string,
        }
    }

    setContext: React.Dispatch<React.SetStateAction<{ colors: { A: string, B: string } }>>
}

export const AppStateContext = createContext<IContextState>(AppState)

const CombinedProviders = ({ children }: IProps) => {
    const [context, setContext] = useState<{ colors: { A: string, B: string } }>({ colors: { A: '', B: '' } })
    return (
        <AppStateContext.Provider value={{ context, setContext }}>
            {children}
        </AppStateContext.Provider>
    )
}

export default CombinedProviders