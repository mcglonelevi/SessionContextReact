import React, { useEffect } from 'react';
import { useSessionContext } from '../contexts/SessionContext';

function useAlertOnce() {
    const sessionContext = useSessionContext();

    useEffect(() => {
        if (!sessionContext.hasSeenAlert) {
            alert('You need to see this.');
            sessionContext.dispatch({ type: 'alertSeen' });
        }
    }, [sessionContext]);
}

export default function Home() {
    useAlertOnce();

    return <h2>Home</h2>;
}