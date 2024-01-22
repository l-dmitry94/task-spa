import { useUser } from 'hooks/UserContext';
import Styled from './ContentItem.styled';

const { Item, ContentLink, ContentText } = Styled;

const ContentItem = ({ goal, image, exercise, exerciseBool }) => {
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
                    <ContentLink
                        to={'/thank-you'}
                        onClick={() => addInfo({ exercise })}
                        exercisestyle={exerciseBool.toString()}
                    >
                        <ContentText exercisestyle={exerciseBool.toString()}>{exercise}</ContentText>
                    </ContentLink>
                </Item>
            )}
        </>
    );
};

export default ContentItem;
