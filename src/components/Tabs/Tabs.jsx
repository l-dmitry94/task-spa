import { Fragment, useState } from 'react';
import Styled from './Tabs.styled';

const tabsPanel = ['ft', 'cm'];

const { TabsSection, TabList, TabItem, InputList, Input } = Styled;

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
                <InputList>
                    <Input type="text" placeholder={`Height(${tabPanel})`} />
                    <Input
                        type="text"
                        placeholder={`Current Weight(${tabPanel}): `}
                    />
                </InputList>
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
