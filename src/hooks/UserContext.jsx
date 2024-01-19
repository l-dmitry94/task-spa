import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ infoStep, children }) => {
    const [userInfo, setUserInfo] = useState({});

    const addInfo = () => {
        setUserInfo(prevUserInfo => ({ ...prevUserInfo, infoStep }));
    };

    return <UserContext.Provider value={{ addInfo, userInfo }}>
        {children}
    </UserContext.Provider>;
};
