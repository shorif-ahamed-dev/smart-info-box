import { createContext, useContext } from '@wordpress/element';

const AttributesContext = createContext();

export const AttributesProvider = ({ attributes, setAttributes, children }) => {
    return (
        <AttributesContext.Provider value={{ attributes, setAttributes }}>
            {children}
        </AttributesContext.Provider>
    );
};

export const useAttributes = () => useContext(AttributesContext);
