import BackLink from 'components/BackLink';
import Banner from 'components/Banner';
import ContinueButton from 'components/ContinueButton';
import Main from 'components/Main';
import Tabs from 'components/Tabs';

const Measure = ({to}) => {
    return (
        <Main>
            <BackLink to={to} />
            <Tabs tabs={["Imperial", "Metric"]} />
            <Banner title="Measure Yourself" text="What are your height and body weight?" />
            <ContinueButton text="Continue"/>
        </Main>
    );
};

export default Measure;
