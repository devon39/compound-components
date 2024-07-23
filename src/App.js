import React from 'react';
import Tabs from './components/Tabs';
import TabList from './components/TabList';
import Tab from './components/Tab';
import TabPanels from './components/TabPanels';
import TabPanel from './components/TabPanel';

const App = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content for Tab 1</TabPanel>
        <TabPanel>Content for Tab 2</TabPanel>
        <TabPanel>Content for Tab 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default App;
