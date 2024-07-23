import React, { useState, createContext } from 'react';

// Create a Context for the Tabs component
export const TabsContext = createContext();

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeTab = (index) => {
    setActiveIndex(index);
  };

  return (
    <TabsContext.Provider value={{ activeIndex, changeTab }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

export default Tabs;