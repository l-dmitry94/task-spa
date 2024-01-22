import { useUser } from 'hooks/UserContext';
import ContinueButtonStyled from './ContinueButton.styled';
const ContinueButton = ({
    text,
    to,
    data,
    isEnterData,
    selectedItems,
    isSelectedItems,
}) => {
    const { addInfo } = useUser();

    if (data || isEnterData) {
        return (
            <ContinueButtonStyled
                to={to}
                enter={isEnterData.toString()}
                onClick={() => addInfo(data)}
            >
                {text}
            </ContinueButtonStyled>
        );
    } else if (selectedItems || isSelectedItems) {
        return (
            <ContinueButtonStyled
                to={to}
                onClick={() => addInfo({selectedItems})}
                select={isSelectedItems.toString()}
            >
                {text}
            </ContinueButtonStyled>
        );
    }
};

export default ContinueButton;
