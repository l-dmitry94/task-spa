import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);

    const addInfo = (infoStep) => {
        setUserInfo(prevUserInfo => ({ ...prevUserInfo, ...infoStep }));
    };

    return <UserContext.Provider value={{ addInfo, userInfo }}>
        {children}
    </UserContext.Provider>;
};
