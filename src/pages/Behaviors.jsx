import BackLink from 'components/BackLink';
import Banner from 'components/Banner';
import Main from 'components/Main';

const Behaviors = ({ to }) => {
    return (
        <Main>
            <BackLink to={to} />
            <Banner title="Destructive behaviors" text="We all have them! Which are yours?"/>
        </Main>
    );
};

export default Behaviors;
