import styled from '@emotion/styled';

const Styled = {
    TabsSection: styled.section`
        margin-top: 90px;
    `,
    TabList: styled.ul`
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        border: ${props => `1px solid ${props.theme.colors.green}`};
        margin-bottom: 10px;
    `,

    TabItem: styled.li`
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0.5;
        height: 32px;
        color: ${props => props.theme.colors.green};
        text-align: center;
        font-family: ${props => props.theme.fonts.primaryFont};
        font-size: 12px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        letter-spacing: 2.5px;
        text-transform: uppercase;
        cursor: pointer;
        ${props =>
            props.active &&
            `
                background-color: ${props.theme.colors.opacitryGreen}
  `}
    `,

    InputList: styled.ul`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `,

    Input: styled.input`
        box-sizing: border-box;
        width: 100%;
        height: 64px;
        color: ${props => props.theme.colors.generalBlack};
        font-family: ${props => props.theme.fonts.primaryFont};
        font-size: 14px;
        line-height: 1.71;
        letter-spacing: 0.02em;
        border-radius: 10px;
        outline: transparent;
        border: ${props => `1px solid ${props.theme.colors.lightGrey}`};
        background: ${props => props.theme.colors.white};
        transition: border-color .3s linear;
        padding: 0 15px;

        &::placeholder {
            color: ${props => props.theme.colors.generalBlack};
            font-family: ${props => props.theme.fonts.primaryFont};
            opacity: 1
        }

        &:is(:hover, :focus) {
            border-color: ${props => props.theme.colors.green};
        }
    `,
};

export default Styled;
