import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const ContinueButtonStyled = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-radius: 12px;
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
    font-family: ${props => props.theme.fonts.inter};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.44;
    letter-spacing: 0.01em;
    margin-top: 100px;

    ${({ enter, select }) =>
        enter === 'true' || select === 'true'
            ? `opacity: 1; 
                pointer-events: auto`
            : `opacity: 0.3; 
                pointer-events: none`}
`;

export default ContinueButtonStyled;
