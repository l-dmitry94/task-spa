import Styled from './Content.styled';
import ContentItem from './ContentItem';

const { Wrapper, Title, ContentList } = Styled;
const Content = ({ title, goals }) => {
    const items = goals.map(({ text, image }, index) => (
        <ContentItem key={index} text={text} image={image} />
    ));

    return (
        <Wrapper>
            {title && <Title>What are your goals?</Title>}
            <ContentList>{items}</ContentList>
        </Wrapper>
    );
};

export default Content;
