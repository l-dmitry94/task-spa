import backArrow from '../../images/icon.svg';
import avocado from '../../images/avocado.png';
import { useLocation } from 'react-router-dom';
import Styled from './BackLink.styled';

const { LinkStyled, LinkBackIcon, LinkWrapper, ImageWrapper } = Styled;

const BackLink = ({ to }) => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? to;

    return (
        <LinkStyled to={backLinkHref}>
            <LinkBackIcon>
                <use href={`${backArrow}#icon-back-arrow`}></use>
            </LinkBackIcon>
            <LinkWrapper>
                <ImageWrapper>
                    <img src={avocado} alt="Food Mentor" />
                </ImageWrapper>
                Food Mentor
            </LinkWrapper>
        </LinkStyled>
    );
};

export default BackLink;
