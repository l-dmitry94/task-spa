import Styled from './Banner.styled';

const { BannerStyled, Title, Text } = Styled;

const Banner = ({ title, text }) => {
    return (
        <BannerStyled>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </BannerStyled>
    );
};

export default Banner;
