import styled, {css} from 'styled-components';
import HomeStyleGuide from './HomeStyleGuide.js'

const headerFont = HomeStyleGuide.font.family.plex;

const mediaQueryLargeMaxWidth = '992px';
const mediaQueryMediumMaxWidth = '768px';
const mediaQuerySmallMaxWidth = '400px';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 400
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})


export const HomeDiv = styled.div.attrs({
  display: props => props.display || 'flex',
  position: props => props.position || null,
  padding: props => props.padding || '0 2%',
  margin: props => props.margin || '0px',
  flexDirection: props => props.flexDirection || "column",
  justifyContent: props => props.justifyContent || 'center',
  alignItems: props => props.alignItems || 'center',
  flexWrap: props => props.flexWrap || null,
  flex: props => props.flex || 'wrap',
  height: props => props.height || null,
  width: props => props.width || null,
  maxWidth: props => props.maxWidth || null,
  order: props => props.order || null,
  backgroundColor: props => props.backgroundColor || null,
  background: props => props.background,
  backgroundImage: props => props.desktopImage || null,
  backgroundRepeat: props => props.backgroundRepeat || 'no-repeat',
  backgroundAttachment: props => props.backgroundAttachment || null,
  backgroundPosition: props => props.backgroundPosition || 'center center',
  backgroundSize: props => props.backgroundSize || null,
  border: props => props.border || null,
  borderLeft: props => props.borderLeft || null,
  borderRight: props => props.borderRight || null,
  borderBottom: props => props.borderBottom || null,
  borderTop: props => props.borderTop || null,
  borderRadius: props => props.borderRadius || null,
  cursor: props => props.cursor || null,
})`
  display: ${props => props.display};
  position: ${props => props.position};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  flex-wrap: ${props => props.flexWrap};
  flex: ${props => props.flex};
  align-items: ${props => props.alignItems};
  height: ${props => props.height ? props.height : 'auto'};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  background-color: ${props => props.backgroundColor};
  background: ${props => props.background};
  background-image: url(${props => props.desktopImage});
  background-repeat: ${props => props.backgroundRepeat}; 
  background-attachment: ${props => props.backgroundAttachment}; 
  background-position: ${props => props.backgroundPosition};
  background-size: ${props => props.backgroundSize};
  border: ${props => props.border};
  border-top: ${props => props.borderTop};
  border-bottom: ${props => props.borderBottom};
  border-left: ${props => props.borderLeft};
  border-right: ${props => props.borderRight};
  border-radius: ${props => props.borderRadius};
  order: ${props => props.order};
  
    &:hover {
      background: ${props => props.hoverBackgroundColor};
      background-size: ${props => props.hoverBackgroundSize};
      cursor: ${props => props.cursor};
    }

    &:hover * {
      color: ${props => props.hoverColor};
    }

    @media (max-width: ${mediaQueryMediumMaxWidth}){
      height: ${props => props.tabletHeight || props.height};
      background: ${props => props.backgroundColor}, 
        url(${props => props.mobileBackground || props.background})
        ${props => props.backgroundRepeat}
        ${props => props.backgroundAttachment}
        ${props => props.backgroundPosition};
      flex-direction: ${props => props.smallTabletFlexDirection || 'column'};
    }

    @media (max-width: ${mediaQuerySmallMaxWidth}){
      height: ${props => props.mobileHeight || props.height};
      background-position: top center;
    }

`

export const HomeHeader = styled.h1.attrs({
  width: props => props.width || null,
  textAlign: props => props.textAlign || 'center',
  margin: props => props.margin || '0px',
  color: props => props.color || HomeStyleGuide.color.black,
  padding: props => props.padding || '0 2%',
  fontFamily: props => props.fontFamily || headerFont,
  fontWeight: props => props.fontWeight || HomeStyleGuide.font.weight.fiveHundred,
})`
  width: ${props => props.width || '100%'};
  text-align: ${props => props.textAlign};
  margin: ${props => props.margin};
  color: ${props => props.color};
  padding: ${props => props.padding};
  font-family: ${props => props.fontFamily || headerFont};
  font-size: ${props => props.fontSize || HomeStyleGuide.font.size.large};
  font-weight: ${props => props.fontWeight};

  &:hover {
      color: ${props => props.hoverColor || null};
      cursor: ${props => props.cursorType || null};
  }

  ${media.desktop`font-size: ${props => props.tabletFontSize || HomeStyleGuide.font.size.mediumLarge};`}
  ${media.tablet`font-size: ${props => props.smallTabletSize || null };`}
  ${media.phone`font-size: ${props => props.mobileFontSize || null };`}
`

export const HomeSectionHeader = styled.h2.attrs({
  width: props => props.width || '100%',
  textAlign: props => props.textAlign || 'center',
  margin: props => props.margin || '0px',
  color: props => props.color || HomeStyleGuide.color.black,
  padding: props => props.padding || '0 2%',
  fontFamily: props => props.fontFamily || headerFont,
  // fontSize: props => props.fontSize ,
  fontWeight: props => props.fontWeight || HomeStyleGuide.font.weight.fiveHundred  
})`
  width: ${props => props.width};
  text-align: ${props => props.textAlign};
  margin: ${props => props.margin};
  color: ${props => props.color};
  padding: ${props => props.padding};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize || HomeStyleGuide.font.size.medium};
  font-weight: ${props => props.fontWeight};

  &:hover {
    color: ${props => props.hoverColor || null};
    cursor: ${props => props.cursorType || null};
}

  ${media.desktop`font-size: ${props => props.tabletFontSize || HomeStyleGuide.font.size.mediumSmall};`}
  ${media.tablet`font-size: ${props => props.smallTabletFontSize || null};`}
  ${media.phone`font-size: ${props => props.mobileFontSize || null};`}
`;

export const HomeParagraph = styled.h3.attrs({
  width: props => props.width || null,
  margin: props => props.margin || '0px',
  color: props => props.color || HomeStyleGuide.color.black,
  padding: props => props.padding || '0 2%',
  fontSize: props => props.fontSize || HomeStyleGuide.font.size.mediumSmall,
  fontWeight: props => props.fontWeight || HomeStyleGuide.font.weight.threeHunded,
  textAlign: props => props.textAlign || 'left',
  border: props => props.botder || null,
})`
  border: ${props => props.border};
  width: ${props => props.width};
  margin: ${props => props.margin};
  color: ${props => props.color};
  text-decoration: ${props => props.textDecoration};
  padding: ${props => props.padding};
  font-family: ${props => props.fontFamily || headerFont};
  font-size: ${props => props.fontSize || HomeStyleGuide.font.size.mediumSmall};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.textAlign};

  &:hover {
    color: ${props => props.hoverColor || null};
    cursor: ${props => props.cursorType || null};
}

  ${media.desktop`font-size: ${props => props.tabletFontSize || HomeStyleGuide.font.size.small};`}
  ${media.tablet`font-size: ${props => props.smallTabletFontSize || HomeStyleGuide.font.size.smallTiny};`}
  ${media.phone`font-size: ${props => props.mobileFontSize || HomeStyleGuide.font.size.tiny};`}
`

export const HomeAnchor = styled.a.attrs({
  height: props => props.height,
  width: props => props.width,
  display: props => props.display || 'flex',
  flexDirection: props => props.flexDirection || "column",
  justifyContent: props => props.justifyContent || 'center',
  alignItems: props => props.alignItems || 'center',
  flexWrap: props => props.flexWrap || null,
  flex: props => props.flex || 'wrap',
  backgroundColor: props => props.backgroundColor,
  margin: props => props.margin || '0px',
  color: props => props.color || HomeStyleGuide.color.black,
  padding: props => props.padding || null,
  fontFamily: props => props.fontFamily || headerFont,
  fontWeight: props => props.fontWeight || HomeStyleGuide.font.weight.fiveHundred,  
  textDecoration: props => props.textDecoration || 'none',
  textAlign: props => props.textAlign || 'center',
  border: props => props.border || null,
})`
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  flex-wrap: ${props => props.flexWrap};
  flex: ${props => props.flex};
  height: ${props => props.height};
  width: ${props => props.width};
  margin: ${props => props.margin};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize || HomeStyleGuide.font.size.mediumLarge};
  font-weight: ${props => props.fontWeight};
  text-decoration: ${props => props.textDecoration};
  text-align: ${props => props.textAlign};
  border: ${props => props.border};

  &:hover {
    color: ${props => props.hoverColor};
    background-color: ${props => props.hoverBackgroundColor};
    cursor: pointer;
  }

  ${media.desktop`font-size: ${props => props.tabletFontSize || HomeStyleGuide.font.size.mediumLarge};`}
  ${media.tablet`font-size: ${props => props.smallTabletFontSize || HomeStyleGuide.font.size.medium};`}
  ${media.phone`font-size: ${props => props.mobileFontSize || HomeStyleGuide.font.size.mediumSmall};`}

`

export const HomeAnchorHomeNav = styled.a.attrs({
  margin: props => props.margin || '0px',
  color: props => props.color || HomeStyleGuide.color.black,
  padding: props => props.padding || null,
  fontFamily: props => props.fontFamily || headerFont,
  fontSize: props => props.fontSize || HomeStyleGuide.font.size.small,
  fontWeight: props => props.fontWeight || HomeStyleGuide.font.weight.fiveHundred,  
  textDecoration: props => props.textDecoration || 'none',
  width: props => props.width || '100%',
  height: props => props.height || '100%',
  maxWidth: props => props.maxWidth || '100%',
  maxHeight: props => props.maxHeight || '100%',
  border: props => props.border || '1px solid white',
  textAlign: props => props.textAlign || 'center',
})`
  margin: ${props => props.margin};
  color: ${props => props.color};
  padding: ${props => props.padding};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-decoration: ${props => props.textDecoration};
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  height: ${props => props.maxHeight};
  max-height: ${props => props.width};
  border: ${props => props.border};
  text-align: ${props => props.textAlign};
  transition: all ease 0.8s;
  
  &:hover {
    border-radius: 100px;
    color: ${props => props.hoverColor}
  }
`

export const HomeCard = styled.a.attrs({
  display: props => props.display || 'flex',
  border: props => props.border || null,
  borderRadius: props => props.borderRadius || '5px',
  padding: props => props.padding || '0 2%',
  margin: props => props.margin || '0px',
  flexDirection: props => props.flexDirection || "column",
  justifyContent: props => props.justifyContent || 'center',
  alignItems: props => props.alignItems || 'center',
  flex: props => props.flex || null,
  height: props => props.height || null,
  width: props => props.width || null,
  backgroundColor: props => props.backgroundColor || null,
  backgroundImage: props => props.desktopImage || null,
  backgroundRepeat: props => props.backgroundRepeat || 'no-repeat',
  backgroundAttachment: props => props.backgroundAttachment,
  backgroundPosition: props => props.backgroundPosition,
  boxShadow: props => props.boxShadow || `0px 1px 10px 1px ${HomeStyleGuide.color.lightGray}`,
  textDecoration: props => props.textDecoration || 'none',
})`
  display: ${props => props.display};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  flex: ${props => props.flex};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  background-image: (${props => props.desktopImage});
  background-repeat: ${props => props.backgroundRepeat}; 
  background-attachment: ${props => props.backgroundAttachment}; 
  background-position: ${props => props.backgroundPosition};
  box-shadow: ${props => props.boxShadow};
  text-decoration: ${props => props.textDecoration};

  ${media.desktop`
    height: ${props => props.tabletHeight};
    background: ${props => props.backgroundColor}, 
      url(${props => props.mobileBackground}) 
      ${props => props.backgroundRepeat} 
      ${props => props.backgroundAttachment} 
      ${props => props.backgroundPosition}
    `}
  ${media.phone`
    height: ${props => props.mobileHeight};
    background-position: top center;
    `}
`

export const HomeInput = styled.input`
  height: ${props => props.height || '35px'};
  border-radius: ${props => props.borderRadius || '5px'};
  border: ${props => props.border || `1px solid ${HomeStyleGuide.color.lightgray}`};
  border-style: ${props => props.borderStyle || 'inset'};
  margin: ${props => props.margin || '10px'};
  text-align: ${props => props.textAlign || 'center'};
`

export const HomeFooterAnchor = styled.a.attrs({
  height: props => props.height,
  width: props => props.width,
  display: props => props.display || 'flex',
  flexDirection: props => props.flexDirection || "column",
  justifyContent: props => props.justifyContent || 'center',
  alignItems: props => props.alignItems || 'center',
  flexWrap: props => props.flexWrap || null,
  flex: props => props.flex || 'wrap',
  backgroundColor: props => props.backgroundColor,
  margin: props => props.margin || '0px',
  color: props => props.color || HomeStyleGuide.color.black,
  padding: props => props.padding || null,
  fontFamily: props => props.fontFamily || headerFont,
  fontSize: props => props.fontSize || HomeStyleGuide.font.size.small,
  fontWeight: props => props.fontWeight || HomeStyleGuide.font.weight.fiveHundred,  
  textDecoration: props => props.textDecoration || 'none',
  textAlign: props => props.textAlign || 'center',
})`
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  flex-wrap: ${props => props.flexWrap};
  flex: ${props => props.flex};
  height: ${props => props.height};
  width: ${props => props.width};
  margin: ${props => props.margin};
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-decoration: ${props => props.textDecoration};
  text-align: ${props => props.textAlign};

  &:hover {
    color: ${props => props.hoverColor};
    background-color: ${props => props.hoverBackgroundColor};
    cursor: pointer;
  }

  ${media.desktop`font-size: ${HomeStyleGuide.font.size.small};`}
  ${media.tablet`font-size: ${HomeStyleGuide.font.size.smallTiny};`}
  ${media.phone`font-size:  ${HomeStyleGuide.font.size.tiny};`}
`

export const HomeImage = styled.img`
  max-width: ${props => props.maxWidth || null};
  max-height: ${props => props.maxHeight || null};
  min-width: ${props => props.minWidth || null};
  min-height: ${props => props.minHeight || null};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '0px'};
  box-shadow: ${props => props.boxShadow ? props.boxShadow : '1px 1px 28px 2px grey' }

  ${media.desktop`height: ${props => props.tabletHeight};`}
  ${media.tablet`height: ${props => props.smallTabletHeight};`}
  ${media.phone`height: ${props => props.mobileHeight};`}
`

export const HomeButton = styled.button`
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  border: ${props => props.border || null};
  border-radius: ${props => props.borderRadius || '10px'};
  border-color: ${props => props.borderColor || null};
  font-size: ${props => props.fontSize || HomeStyleGuide.font.size.mediumLarge}; 
  font-family: ${props => props.fontFamily || headerFont};
  font-weight: ${props => props.fontWeight};

  &:hover {
    color: ${props => props.hoverColor};
    cursor: pointer;
    background-color: ${props => props.hoverBackground};
  }

`