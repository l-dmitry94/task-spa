import BackLink from 'components/BackLink';
import Main from 'components/Main';
import Tabs from 'components/Tabs';

const Measure = ({to}) => {
    return (
        <Main>
            <BackLink to={to} />
            <Tabs tabs={["Imperial", "Metric"]} />
        </Main>
    );
};

export default Measure;
