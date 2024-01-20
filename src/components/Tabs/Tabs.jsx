import { Fragment, useState } from 'react';
import Styled from './Tabs.styled';

const tabsPanel = ['ft', 'cm'];

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
            {index === activeIndexTab && <ul>
                <div>
                    <label htmlFor="ft">Height: </label>
                    <input type="text" id='ft'/>

                </div>
                    <label htmlFor="ft">Current Weight:</label>
                    <input type="text" />
                </ul>}
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
