import Banner from 'components/Banner';
import Content from 'components/Content';
import goals from 'data/goals';
import BackLink from 'components/BackLink';
import Main from 'components/Main';

const Goal = ({ to }) => {
    return (
        <Main>
            <BackLink to={to} />

            <section>
                <Banner
                    title="The Goal"
                    text="Focus on the health benefits you need. Balanced nutrition will let you
                        achieve them"
                />

                <Content title="What are your goals?" goals={goals} />
            </section>
        </Main>
    );
};

export default Goal;
