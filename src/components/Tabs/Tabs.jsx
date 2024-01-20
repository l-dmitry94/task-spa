import { Fragment, useState } from 'react';
import Styled from './Tabs.styled';

const tabsPanel = ['ft', 'cm'];

const { TabsSection, TabList, TabItem } = Styled;

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
            {index === activeIndexTab && (
                <ul>
                    <div>
                        <label htmlFor="height">
                            {`Height(${tabPanel}): `}{' '}
                        </label>
                        <input type="text" id="height" />
                    </div>
                    <label htmlFor="weight">{`Current Weight(${tabPanel}): `}</label>
                    <input type="text" id="weight" />
                </ul>
            )}
        </Fragment>
    ));

    return (
        <TabsSection>
            <TabList>{tabsItems}</TabList>
            {tabPanelItems}
        </TabsSection>
    );
};

export default Tabs;
