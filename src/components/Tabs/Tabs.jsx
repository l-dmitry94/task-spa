import { Fragment, useState } from 'react';
import Styled from './Tabs.styled';

const tabsPanel = ['TabPanel-1', 'TabPanel-2'];

const { TabList, TabItem } = Styled;

const Tabs = ({ tabs }) => {
    const [activeIndexTab, setActiveIndex] = useState(0);

    const changeIndex = index => {
        setActiveIndex(index);
    };

    const tabsItems = tabs.map((tab, index) => (
        <TabItem
            key={index}
            active={index === activeIndexTab}
            onClick={() => changeIndex(index)}
        >
            {tab}
        </TabItem>
    ));

    const tabPanelItems = tabsPanel.map((tabPanel, index) => (
        <Fragment key={index}>
            {index === activeIndexTab && <div>{tabPanel}</div>}
        </Fragment>
    ));

    return (
        <section className="tabs">
            <TabList>{tabsItems}</TabList>
            {tabPanelItems}
        </section>
    );
};

export default Tabs;
