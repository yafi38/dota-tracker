import { createContext } from 'react';

const AuthContext = createContext({ isLoggedIn: false, id: null, login: () => { }, logout: () => { } });

export default AuthContext;