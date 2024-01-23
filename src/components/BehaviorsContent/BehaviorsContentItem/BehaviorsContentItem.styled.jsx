import styled from '@emotion/styled';

const Styled = {
    BehaviorItem: styled.li`
        flex-basis: calc((100% - 15px) / 2);
        display: flex;
        align-items: center;
        gap: 10px;
        box-sizing: border-box;
        border-radius: 15px;
        border: ${props => `1px solid ${props.theme.colors.lightGrey}`};
        background: ${props => props.theme.colors.white};
        cursor: pointer;
        padding: 12px 16px 12px 15px;

        ${({ selected }) =>
            selected && `border: 1px solid green`};

            @media (min-width: 360px) {
                padding: 12px 24px 12px 15px;
            }
    `,
    BehaviorText: styled.p`
        color: ${props => props.theme.colors.generalBlack};
        font-family: ${props => props.theme.fonts.primaryFont};
        font-size: 12px;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.025em;
    `,
};

export default Styled;
