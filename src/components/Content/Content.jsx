import Styled from './Content.styled';
import ContentItem from './ContentItem';
import staticImage from "../../images/step-4/exercise-1.png"

const { Wrapper, Title, ContentList, ExerciseWrapper, } = Styled;
const Content = ({ title, goals, exerciseData, exerciseBool }) => {
    let items = [];

    if (goals) {
        items = goals.map(({ text, image }, index) => (
            <ContentItem key={index} goal={text} image={image} />
        ));
    } else if(exerciseData) {
        items = exerciseData.map((exercise, index) => (
            <ContentItem key={index} exercise={exercise} exerciseBool={exerciseBool} />
        ))
    }

    return (
        <Wrapper>
            {title && <Title>{title}</Title>}
            {goals && <ContentList>{items}</ContentList>}
            {exerciseData && (
                <ExerciseWrapper>
                    <img src={staticImage} alt="exercise" />
                    <ContentList exercise={exerciseBool}>{items}</ContentList>
                </ExerciseWrapper>
            )}
        </Wrapper>
    );
};

export default Content;
