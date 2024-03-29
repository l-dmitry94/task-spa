import styled from '@emotion/styled';

const Styled = {
    Wrapper: styled.div`
        
    `,
    Title: styled.h3`
        color: ${props => props.theme.colors.generalBlack};
        text-align: center;
        font-family: ${props => props.theme.fonts.primaryFont};
        font-size: 14px;
        font-weight: 700;
        line-height: 1.72;
        letter-spacing: 0.01em;
        margin-bottom: 15px;
    `,

    ContentList: styled.ul`
        display: flex;
        gap: 16px;
        flex-wrap: wrap;

        ${({exercise}) => exercise && `
            gap: 15px;
            flex-wrap: nowrap;
            flex-direction: column
        `}
    `,

    ExerciseWrapper: styled.div`
        display: flex;
        gap: 15px;
    `
};

export default Styled;
