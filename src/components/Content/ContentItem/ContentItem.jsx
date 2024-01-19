import { useUser } from 'hooks/UserContext';
import Styled from './ContentItem.styled';

const { Item, ContentLink, ContentText } = Styled;

const ContentItem = ({ text, image }) => {
    const { addInfo } = useUser();
    return (
        <Item>
            <ContentLink to={'/step-2'} onClick={() => addInfo({text})}>
                <ContentText>{text}</ContentText>
                <img src={image} alt={text} />
            </ContentLink>
        </Item>
    );
};

export default ContentItem;
