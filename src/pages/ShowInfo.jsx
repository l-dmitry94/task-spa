import BackLink from 'components/BackLink';
import Banner from 'components/Banner';
import Container from 'components/Container';
import Main from 'components/Main';
import UserInfo from 'components/UserInfo';

const ShowInfo = ({ to }) => {
    return (
        <Main>
            <BackLink to={to} />

            <Container>
                <Banner title="Thank you for your data"/>

                <UserInfo />
            </Container>
        </Main>
    );
};

export default ShowInfo;
