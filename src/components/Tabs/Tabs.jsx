import { Fragment, useState } from 'react';
import Styled from './Tabs.styled';
import Banner from 'components/Banner';
import ContinueButton from 'components/ContinueButton';

const tabsPanel = ['ft', 'cm'];

const initialMeasureFt = {
    heightFt: '',
    weightFt: '',
};

const initialMeasureCm = {
    heightCm: '',
    weightCm: '',
};

const { TabsSection, TabList, TabItem, InputList, Input } = Styled;

const Tabs = ({ tabs }) => {
    const [activeIndexTab, setActiveIndex] = useState(0);
    const [measuresFt, setMeasuresFt] = useState({ ...initialMeasureFt });
    const [measuresCm, setMeasuresCm] = useState({ ...initialMeasureCm });
    const [isEnterData, setIsEnterData] = useState(false)

    const changeIndex = index => {
        setActiveIndex(index);
    };

    const onChangeInput = (event, tabPanel) => {
        const { name, value } = event.target;

        if (tabPanel === 'ft') {
            setMeasuresFt({
                ...measuresFt,
                [name]: value,
            });
        } else if (tabPanel === 'cm') {
            setMeasuresCm({
                ...measuresCm,
                [name]: value,
            });
        }

        if((measuresFt.heightFt && measuresFt.weightFt) || (measuresCm.heightCm && measuresCm.weightCm)) {
            setIsEnterData(value !== "")
        }
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
                    <Input
                        type="number"
                        placeholder={`Height(${tabPanel})`}
                        value={
                            tabPanel === 'ft'
                                ? measuresFt.heightFt
                                : measuresCm.heightCm
                        }
                        name={tabPanel === 'ft' ? 'heightFt' : 'heightCm'}
                        onChange={event => onChangeInput(event, tabPanel)}
                    />
                    <Input
                        type="number"
                        placeholder={`Current Weight(${tabPanel}): `}
                        value={
                            tabPanel === 'ft'
                                ? measuresFt.weightFt
                                : measuresCm.weightCm
                        }
                        name={tabPanel === 'ft' ? 'weightFt' : 'weightCm'}
                        onChange={event => onChangeInput(event, tabPanel)}
                    />
                </InputList>
            )}
        </Fragment>
    ));

    return (
        <>
            <TabsSection>
                <TabList>{tabsItems}</TabList>
                {tabPanelItems}
            </TabsSection>
            <Banner
                title="Measure Yourself"
                text="What are your height and body weight?"
            />
            <ContinueButton
                text="Continue"
                to="/step-3"
                data={{...measuresFt, ...measuresCm}}
                isEnterData={isEnterData}
            />
        </>
    );
};

export default Tabs;
