import { useUser } from 'hooks/UserContext';
import ContinueButtonStyled from './ContinueButton.styled';
const ContinueButton = ({ text, to, data }) => {
    const { addInfo } = useUser();
    return <ContinueButtonStyled to={to} onClick={()=> addInfo(data)}>{text}</ContinueButtonStyled>;
};

export default ContinueButton;
