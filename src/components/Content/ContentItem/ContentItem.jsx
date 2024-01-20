import { useUser } from 'hooks/UserContext';
import Styled from './ContentItem.styled';

const { Item, ContentLink, ContentText } = Styled;

const ContentItem = ({ goal, image }) => {
    const { addInfo } = useUser();
    return (
        <Item>
            <ContentLink to={'/step-2'} onClick={() => addInfo({goal})}>
                <ContentText>{goal}</ContentText>
                <img src={image} alt={goal} />
            </ContentLink>
        </Item>
    );
};

export default ContentItem;
