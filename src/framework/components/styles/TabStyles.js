import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import Icon from 'framework/assets/Icon'
import { getColor } from 'framework/assets/colors'

export const PanelDiv = styled.div`
    height: calc(100vh - 240px);
    /*padding: 20px;*/
    font-family: ${(props) => props.theme.font};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    background-color: #fff;
    border-radius: 0px 4px 4px 4px;
    overflow: scroll;
`
export const TabLink = styled(Link)`
    display:inline-block;
    text-decoration: none;
    height:100%;
    outline: 0;
    color: ${(props) => props.theme.tabs.TAB_TEXT};
    font-family:  ${(props) => props.theme.font};
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    &:hover{
        color:white;
    }
    ${props => props.className === true && css`
        color: white;
    `}
    padding-left: 20px;
    padding-right: 20px;
`
export const TabCloseLink = styled(Link)`
    display:inline-block;
    text-decoration: none;
    height:100%;
    outline: 0;
    color: ${(props) => props.theme.tabs.TAB_TEXT};
    font-family:  ${(props) => props.theme.font};
    font-style: normal;
    font-size: 15px;
    font-weight: 300;
    ${props => props.on === true && css`
        color: white;
    `}
`

export const TabDiv = styled.div`
display:inline-flex;
`
export const TabList = styled.ul`
    height: 40px;
    margin: 0;
    padding: 0;
    /*padding: 20px 0px 0px 20px;*/
    overflow-y: hidden;
`
export const TabClose = styled.div`
    position: absolute;
    top:-13px;
    right:3px;
    ${props => props.on === true && css`
      color:white;
    `}
`
export const TabLabel = styled.li`
    display: inline-flex;
    height: 40px;
    line-height: 40px;
    background-color:${(props) => props.theme.tabs.TAB};
    border-radius: 5px 5px 0px 0px;
     &:hover{
        background-color: ${getColor('TAB_COLOR_1')};
    }
    ${props => props.on === true && css`
        background-color: ${(props) => props.theme.tabs.TAB_SELECTED};
        color: ${(props) => props.theme.tabs.TAB_TEXT_SELECTED};
    `}
   
    position:relative;
    margin-right: 1px;
`

export const TabIconDiv = styled.div`
   margin: 0;
    margin-top: -1px;
    margin-right: 3px;
    padding: 0;
    font-size: 18px;
    ${props => props.on === true && css`
        color: white;
    `}
    `
export const TabIcon = styled(Icon)`
 
`

export const TabWrapperDiv = styled.div`
    clear: both;
    width: 100%;
`