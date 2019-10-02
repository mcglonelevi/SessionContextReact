import React from 'react';
import { render } from '@testing-library/react';
import SessionContextProvider, { useSessionContext } from '../contexts/SessionContext';
import Home from './Home';

function mountHomeScene(initialStateOverrides = {}) {
    return(
        render(
            <SessionContextProvider initialStateOverrides={initialStateOverrides}>
                <Home />
            </SessionContextProvider>
        )
    );
}

describe('Home Scene', () => {
    beforeEach(() => {
        window.alert = jest.fn();
    });

    describe('when the user has seen the alert before', () => {
        it('does not show the alert', () => {
            mountHomeScene({ hasSeenAlert: true });
            expect(window.alert).not.toHaveBeenCalled();
        });
    });

    describe('when the user has seen the alert before', () => {
        it('shows the alert', () => {
            mountHomeScene();
            expect(window.alert).toHaveBeenCalled();
        });
    });
});
