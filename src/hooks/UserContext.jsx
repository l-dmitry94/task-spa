import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(() => {
        const savedUserInfo = localStorage.getItem('userInfo');
        return savedUserInfo ? JSON.parse(savedUserInfo) : null;
    });

    useEffect(() => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }, [userInfo]);

    const addInfo = infoStep => {
        setUserInfo(prevUserInfo => ({ ...prevUserInfo, ...infoStep }));
    };

    return (
        <UserContext.Provider value={{ addInfo, userInfo }}>
            {children}
        </UserContext.Provider>
    );
};
