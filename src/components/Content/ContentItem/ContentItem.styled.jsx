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
        border-radius: 20.848px;
        border: ${props => `1.042px solid ${props.theme.colors.lightGrey}`};
        background: linear-gradient(214deg, #f1f1f1 12.33%, #fff 69.93%);
    `,

    ContentText: styled.p`
        color: ${props => props.theme.colors.generalBlack};
        font-family: ${props => props.theme.fonts.inter};
        font-size: 16.679px;
        font-weight: 500;
        line-height: 1.37;
        letter-spacing: 0.01em;
        padding-left: 10px;
    `,
};

export default Styled;
