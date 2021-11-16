import styled, { createGlobalStyle } from "styled-components"

import fontLight from "../assets/fonts/FuturaPT-Light.ttf"
import fontRegular from "../assets/fonts/FuturaPT-Book.ttf"
import FuturaMedium from "../assets/fonts/FuturaPTMedium.otf"
import fontBold from "../assets/fonts/FuturaPT-Bold.ttf"
import fontExtraBold from "../assets/fonts/FuturaPT-ExtraBold.ttf"
import FuturaHeavy from "../assets/fonts/FuturaPTHeavy.otf"

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Futura Light';
    src: url(${fontLight});
    font-style: normal;
    font-weight: 300;
    font-display: fallback; // to avoid flickering as suggested in docs
  }
  @font-face {
    font-family: 'Futura';
    src: url(${fontRegular});
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Futura Medium';
    src: url(${FuturaMedium});
    font-style: normal;
    font-weight: 500;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Futura Bold';
    src: url(${fontBold});
    font-style: normal;
    font-weight: 700;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Futura Extra Bold';
    src: url(${fontExtraBold});
    font-style: normal;
    font-weight: 900;
    font-display: fallback;
  }
  @font-face {
    font-family: 'Futura Heavy';
    src: url(${FuturaHeavy});
    font-style: normal;
    font-weight: 900;
    font-display: fallback;
  }
`

const Headline = styled.h1`
  font-family: ${props => (props.banner ? "Futura Medium" : "Futura Heavy")};
  /* font-family: Futura Medium; */
  color: #464343;
  margin: ${props => (props.banner ? 0 : "")};

  ${props => props.theme.mobile`
    font-size: 30px;
    line-height: 35px;
  `}

  ${props => props.theme.tablet`
    text-align: ${props.banner ? "center" : ""};
  `}

  ${props => props.theme.desktop`
    font-size: ${props.banner ? "60px" : "36px"};
    line-height: ${props.banner ? "77px" : "45px"};
  `}

  ${props => props.theme.largeScreen`
    font-size: ${props.banner ? "80px" : "56px"};
    line-height: ${props.banner ? "100px" : "72px"};
  `}
`

const Title = styled.h2`
  font-family: Futura Heavy;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0px;
  margin: 0 auto;
  margin-bottom: 40px;
  color: #707070;

  ${props => props.theme.desktop`
    text-align: ${props.course ? "left" : "center"};
    font-size: ${props.course ? "36px" : "50px"};
    line-height: ${props.course ? "40px" : "60px"};
  `}

  ${props => props.theme.largeScreen`
    text-align: ${props.course ? "left" : "center"};
    font-size: ${props.course ? "36px" : "65px"};
    line-height: ${props.course ? "40px" : "84px"};
  `}
`

const Subtitle = styled.h4`
  font-family: Futura Heavy;
  font-size: 25px;
  line-height: 30px;
  margin-bottom: 13px;
  color: #707070;

  ${props => props.theme.desktop`
    font-size: 36px;
    line-height: 45px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 40px;
    line-height: 51px;
  `}
`
const SubtitleBold = styled.h4`
  font-family: Futura Bold;
  font-size: 22px;
  line-height: 30px;
  color: #153e35;

  ${props => props.theme.desktop`
    font-size: 36px;
    line-height: 45px;
    margin-bottom: 13px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 40px;
    line-height: 44px;
  `}
`

const TabTitle = styled.h3`
  font-family: Futura Medium;
  font-size: 11px;
  line-height: 13px;
  margin: 0;

  ${props => props.theme.desktop`
    font-size: 30px;
    line-height: 38px;
  `}
`

const H3 = styled.h3`
  font-family: Futura Heavy;
  font-size: 23px;
  line-height: 28px;
  color: #707070;
  margin: 0;

  ${props => props.theme.desktop`
    font-size: ${props.course ? "23px" : "36px"};
    line-height: ${props.course ? "28px" : "45px"};
  `}
  ${props => props.theme.largeScreen`
    font-size: ${props.course ? "25px" : "56px"};
    line-height: ${props.course ? "30px" : "72px"};
  `}
`

const H4 = styled.h4`
  font-family: Futura Heavy;
  margin: 0;

  ${props => props.theme.mobile`
    font-size: ${props.card ? "19px" : "14px"};
    line-height: ${props.card ? "25px" : "19px"};
  `}

  ${props => props.theme.desktop`
    font-size: ${props.card ? "23px" : "14px"};
    line-height: ${props.card ? "30px" : "19px"};
  `}
  ${props => props.theme.largeScreen`
    font-size: ${props.card ? "31px" : "14px"};
    line-height: ${props.card ? "39px" : "19px"};
  `}
`
const H5 = styled.h5`
  font-family: Futura Medium;
  margin: 0;
  color: #707070;
`

const Paragraph = styled.p`
  font-family: "Futura Medium";
  font-size: 20px;
  line-height: 26px;
  color: #707070;

  ${props => props.theme.desktop`
    font-size: 24px;
    line-height: 31px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 28px;
    line-height: 31px;
  `}
`

const ParagraphMedium = styled.p`
  font-family: Futura Medium;
  font-size: 22px;
  line-height: 27px;
  color: #535353;
  letter-spacing: 0px;

  ${props => props.theme.desktop`
    font-size: ${props.course ? "25px" : "32px"};
    line-height: ${props.course ? "30px" : "45px"};
  `}

  ${props => props.theme.largeScreen`
    font-size: ${props.course ? "25px" : "36px"};
    line-height: ${props.course ? "30px" : "45px"};
  `}
`

const ParagraphHeavy = styled.p`
  font-family: Futura Heavy;
  font-size: 190px;
  line-height: 0.8;
  letter-spacing: 0px;
  color: #cc4a28;
  opacity: 1;
  margin: 0;

  ${props => props.theme.desktop`
    font-size: 315px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 389px;
  `}
`

const DivHeavy = styled.div`
  font-family: Futura Heavy;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0px;
  color: #707070;
  text-align: center;

  ${props => props.theme.desktop`
    font-size: 32px;
    line-height: 41px;
    text-align: left;
  `}

  ${props => props.theme.largeScreen`
    font-size: 36px;
    line-height: 46px;
  `}
`

const SpanHeavy = styled.span`
  font-family: Futura Heavy;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0px;
  color: #cc4a28;

  ${props => props.theme.desktop`
    font-size: 32px;
    line-height: 41px;
  `}

  ${props => props.theme.largeScreen`
    font-size: 36px;
    line-height: 46px;
  `}
`

export {
  Typography,
  // BannerHeadline,
  Headline,
  Title,
  TabTitle,
  H3,
  H4,
  H5,
  Subtitle,
  SubtitleBold,
  Paragraph,
  ParagraphMedium,
  ParagraphHeavy,
  DivHeavy,
  SpanHeavy,
}
