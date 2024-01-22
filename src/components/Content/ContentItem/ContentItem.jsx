import { useUser } from 'hooks/UserContext';
import Styled from './ContentItem.styled';
import exerciseImage from "../../../images/step-4/exercise-1.png"

const { Item, ContentLink, ContentText } = Styled;

const ContentItem = ({ goal, image, exercise }) => {
    const { addInfo } = useUser();
    return (
        <>
            {goal && image && (
                <Item>
                    <ContentLink
                        to={'/step-2'}
                        onClick={() => addInfo({ goal })}
                    >
                        <ContentText>{goal}</ContentText>
                        <img src={image} alt={goal} />
                    </ContentLink>
                </Item>
            )}

            {exercise && (
                <Item>
                    <ContentLink to={'/thank-you'} onClick={() => addInfo({ exercise })}>
                        <p>{exercise}</p>
                    </ContentLink>
                </Item>
            )}
        </>
    );
};

export default ContentItem;
