import { useUser } from 'hooks/UserContext';
import ContinueButtonStyled from './ContinueButton.styled';
const ContinueButton = ({ text, to, data, isEnterData }) => {
    const { addInfo } = useUser();
    return <ContinueButtonStyled to={to} enter={isEnterData.toString()} onClick={()=> addInfo(data)}>{text}</ContinueButtonStyled>;
};

export default ContinueButton;
