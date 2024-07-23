import React from 'react';
import { useContext } from 'react';
import { TabsContext } from './Tabs';

const TabList = ({ children }) => {
  const { activeIndex, changeTab } = useContext(TabsContext);

  return (
    <div className="tab-list">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isActive: index === activeIndex,
          onClick: () => changeTab(index),
        });
      })}
    </div>
  );
};

export default TabList;