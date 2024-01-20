import styled from '@emotion/styled';

const Styled = {
    TabList: styled.ul`
        display: flex;
        border-radius: 10px;
        overflow: hidden;
        border: ${props => `1px solid ${props.theme.colors.green}`};
    `,

    TabItem: styled.li`
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0.5;
        height: 32px;
        color: ${props => props.theme.colors.green};
        text-align: center;
        font-family: ${props => props.theme.fonts.inter};
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
};

export default Styled;
