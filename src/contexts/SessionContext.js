import React, { createContext, useReducer, useContext } from 'react';

export const SessionContext = createContext();

function SessionContextReducer(state, action) {
    switch (action.type) {
        case 'alertSeen':
            return {
                hasSeenAlert: true,
            };
        case 'buttonPressed':
            return {
                buttonPresses: state.buttonPresses + 1,
            };
        default:
            throw new Error('Invalid action type in SessionContextReducer');
    }
}

export default function SessionContextProvider({ children, initialStateOverrides }) {
    const [state, dispatch] = useReducer(SessionContextReducer, {
        hasSeenAlert: false,
        buttonPresses: 0,
        ...initialStateOverrides,
    });

    return (
        <SessionContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </SessionContext.Provider>
    );
}

export function useSessionContext() {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error('useSessionContext must be used within a SessionContextProvider');
    }
    return context;
}
