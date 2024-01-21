import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ContinueButtonStyled = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 12px;
    opacity: 0.3;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.inter};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.44;
    letter-spacing: 0.01em;
    margin-top: 100px;
`;

export default ContinueButtonStyled;
