import ContinueButtonStyled from './ContinueButton.styled';
const ContinueButton = ({ text }) => {

    return <ContinueButtonStyled to={'/step-3'}>{text}</ContinueButtonStyled>;
};

export default ContinueButton;
