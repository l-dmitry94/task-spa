import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Styled = {
    LinkStyled: styled(Link)`
        display: flex;
        align-items: center;
    `,

    LinkBackIcon: styled.svg`
        width: 30px;
        height: 30px;
        fill: ${props => props.theme.colors.backLink};
    `,

    LinkWrapper: styled.div`
        display: flex;
        align-items: center;
        font-family: ${props => props.theme.fonts.roboto}
    `,

    ImageWrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        border-radius: 6.543px;
        background: linear-gradient(0deg, #f4f4f4 0%, #f4f4f4 100%);
        margin-right: 10px;
    `,
};

export default Styled;
