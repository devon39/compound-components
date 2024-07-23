import React from 'react';
import { useContext } from 'react';
import { TabsContext } from './Tabs';

const TabPanels = ({ children }) => {
  const { activeIndex } = useContext(TabsContext);

  return <div className="tab-panels">{children[activeIndex]}</div>;
};

export default TabPanels;