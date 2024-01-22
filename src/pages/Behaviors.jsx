import behaviors from 'data/behaviors';
import Main from 'components/Main';
import BackLink from 'components/BackLink';
import Banner from 'components/Banner';
import BehaviorsContent from 'components/BehaviorsContent';
import Container from 'components/Container';

const Behaviors = ({ to }) => {
    return (
        <Main>
            <BackLink to={to} left="left" />
            <Container>
                <Banner
                    title="Destructive behaviors"
                    text="We all have them! Which are yours?"
                />
                <BehaviorsContent data={behaviors} />
            </Container>
        </Main>
    );
};

export default Behaviors;
