import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Styled = {
    Item: styled.li`
        flex-basis: calc((100% - 16px) / 2);
    `,

    ContentLink: styled(Link)`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border-radius: 20px;
        border: ${props => `1px solid ${props.theme.colors.lightGrey}`};
        background: linear-gradient(214deg, #f1f1f1 12.33%, #fff 69.93%);
        overflow: hidden;

        ${({ exercisestyle, theme }) =>
            exercisestyle &&
            `
            height: 80px;
            background: ${theme.colors.white}
        `}
    `,

    ContentText: styled.p`
        color: ${props => props.theme.colors.generalBlack};
        font-family: ${props => props.theme.fonts.inter};
        font-weight: 500;
        line-height: 1.37;
        letter-spacing: 0.01em;
        padding-left: 10px;

        ${({ exercisestyle }) =>
            exercisestyle &&
            `
            padding-left: 15px;
            padding-right: 26px
        `}

        @media (min-width: 360px) {
            ${({ exercisestyle }) =>
                exercisestyle &&
                `
            padding: 0 15px;
        `}
        }
    `,
};

export default Styled;
