import BackLink from 'components/BackLink';
import Banner from 'components/Banner';
import Container from 'components/Container';
import Content from 'components/Content';
import Main from 'components/Main';

const exerciseData = [
    'Hardly at all',
    'Fitness 1-2 times a week',
    'Fitness 3-5 times a week',
    'Fitness 5-7 times a week',
];

const Exercise = ({ to }) => {
    return (
        <Main>
            <BackLink to={to} />
            <Container>
                <Banner
                    title="Physical exercise"
                    text="Physical exercise means a lot for a woman who 
                            wants to lose kilos and works at the office"
                />
                <Content title="How active are you during the day?" exerciseData={exerciseData} exerciseBool={true}/>
            </Container>
        </Main>
    );
};

export default Exercise;
