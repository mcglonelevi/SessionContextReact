import React from 'react';
import { useSessionContext } from '../contexts/SessionContext';

function useButtonPress() {
    const sessionContext = useSessionContext();
    return [sessionContext.buttonPresses, () => {
        sessionContext.dispatch({type: 'buttonPressed'});
    }];
}

export default function Users() {
    const [buttonPresses, btnPressFunction] = useButtonPress();

    return (
        <div>
            <h2>Users</h2>
            <button onClick={btnPressFunction}>Add User</button>
            <p>Button has been pressed: {buttonPresses} times</p>
        </div>
    );
}