import BackLink from 'components/BackLink';
import Container from 'components/Container';
import Main from 'components/Main';
import Tabs from 'components/Tabs';

const Measure = ({ to }) => {
    return (
        <Main>
            <BackLink to={to} />
            <Container>
                <Tabs tabs={['Imperial', 'Metric']} />
            </Container>
        </Main>
    );
};

export default Measure;
