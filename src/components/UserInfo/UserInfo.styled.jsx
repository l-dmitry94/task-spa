import styled from '@emotion/styled';

const Styled = {
    UserInfoList: styled.ul`
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin-top: 28px;
    `,

    UserInfoItem: styled.li`
        font-family: ${props => props.theme.fonts.primaryFont};
        font-size: 18px;
        line-height: 1.5;
    `,
};

export default Styled;
