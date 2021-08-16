import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);
    const [data1, setData1] = useState(null);

    return (
        <UserContext.Provider value={{user:[user, setUser], data1:[data1, setData1]}}>
            {props.children}
        </UserContext.Provider>
    );
}
