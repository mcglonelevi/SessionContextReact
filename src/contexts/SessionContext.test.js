import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SessionContextProvider, { SessionContext, useSessionContext } from './SessionContext';

function mountSessionContextProvider(initialStateOverrides = {}) {
    return(
        render(
            <SessionContextProvider initialStateOverrides={initialStateOverrides}>
                <SessionContext.Consumer>
                    {(state) => {
                        return (
                            <div>
                                <p>{state.buttonPresses}</p>
                                <p>{JSON.stringify(state.hasSeenAlert)}</p>
                            </div>
                        );
                    }}
                </SessionContext.Consumer>
            </SessionContextProvider>
        )
    );
}

function SessionContextHookHarness() {
    const {dispatch, buttonPresses} = useSessionContext();

    return (
        <div>
            <div>{buttonPresses}</div>
            <button onClick={() => dispatch({type: 'buttonPressed'})}>Press</button>
        </div>
    );
}

function mountSessionContextHookHarness(initialStateOverrides = {}) {
    return(
        render(
            <SessionContextProvider initialStateOverrides={initialStateOverrides}>
                <SessionContextHookHarness />
            </SessionContextProvider>
        )
    );
}

describe('SessionContextProvider', () => {
    it('renders without crashing', () => {
        mountSessionContextProvider();
    });
    
    it('renders button presses', () => {
        const {getByText} = mountSessionContextProvider();
        getByText('0');
    });
    
    it('renders hasSeenAlert', () => {
        const {getByText} = mountSessionContextProvider();
        getByText('false');
    });
});

describe('useSessionContext', () => {
    it('increments on button press', () => {
        const { getByText } = mountSessionContextHookHarness();
        getByText('0');
        fireEvent.click(getByText('Press'));
        getByText('1');
    });
});
