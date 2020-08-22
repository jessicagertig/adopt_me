import { createContext } from 'react';

//hook has a state and has an updater
const ThemeContext = createContext(['green', () => {}])

export default ThemeContext