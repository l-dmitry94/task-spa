import Styled from './Content.styled';
import ContentItem from './ContentItem';

const { Wrapper, Title, ContentList } = Styled;
const Content = ({ title, data }) => {
    let items = null;

    items = data.map((item, index) => {
        if (typeof item === 'object' && item.text && item.image) {
            return (
                <ContentItem key={index} goal={item.text} image={item.image} />
            );
        } else if (typeof item === 'string') {
            return <ContentItem key={index} exercise={item} />;
        } else {
            return null;
        }
    });

    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
            <ContentList>{items}</ContentList>
        </Wrapper>
    );
};

export default Content;
