import styled from '@emotion/styled';

const Styled = {
    BannerStyled: styled.div`
        text-align: center;
        font-family: ${props => props.theme.fonts.inter};
        padding: 15px 0;
    `,

    Title: styled.h2`
        color: ${props => props.theme.colors.generalBlack};
        font-size: 24px;
        line-height: 1.5;
        letter-spacing: 0.01em;
    `,

    Text: styled.p`
        color: ${props => props.theme.colors.grey};
        font-size: 14px;
        line-height: 1.71; 
        letter-spacing: 0.02em;
    `,
};

export default Styled;
