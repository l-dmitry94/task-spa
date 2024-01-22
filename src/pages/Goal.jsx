import Banner from 'components/Banner';
import Content from 'components/Content';
import goals from 'data/goals';
import BackLink from 'components/BackLink';
import Main from 'components/Main';
import Container from 'components/Container';

const Goal = ({ to }) => {
    return (
        <Main>
            <BackLink to={to} />
            
            <Container>
                <Banner
                    title="The Goal"
                    text="Focus on the health benefits you need. Balanced nutrition will let you
                        achieve them"
                />

                <Content title="What are your goals?" data={goals} />
            </Container>
        </Main>
    );
};

export default Goal;
