import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    background: #4267b2;
    min-width: 1012px;
`

export const Content = styled.div`
    width: 1012px;
    height: 42px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const SearchFieldGroup = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

    a {
        display: flex;
    }
`

export const SearchField = styled.span`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;

    input {
        width: 100%;
        height: 24px;
        margin-left: 7px;
        margin-right: 12px;
        padding-left: 8px;
        border: 0;
        border-radius: 2px;
    }

    a {
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        position: absolute;
        right: 12px;
        width: 46px;
        height: 24px;
        background: ${darken(0.04, '#fff')};
        transition: background 0.2s;

        &:hover {
            background: ${darken(0.1, '#fff')}
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
`

export const TextButton = styled.button`

    display: flex;
    align-items: center;
    height: 28px;
    border: 0;
    border-radius: 2px;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    background: none;
    position: relative;

    &:hover {
        background: ${darken(0.04, '#4267b2')}
    }

    img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-right: 7px;
    }

    span {
        margin: 0 12px;
    }

    img + span {
        margin-left: 0;
    }

    &::after {
        content:'';
        height: 18px;
        border-right: 1px solid rgba(0, 0, 0, .1);
    }
`

export const IconButton = styled.button`
    display: flex;
    border: 0;
    background: none;
    padding: 0 9px;
    position: relative;

    i {
        opacity: 0.6;

        &:hover {
            opacity: 0.8;
        }

         /*
          PRA DEIXAR BRANCO
          opacity: 1;
          filter: brightness(0) invert(1);   
          */ 
    }

`

export const NotificationButtons = styled.span`
    display: flex;
    align-items: center;

    &::after {
        content:'';
        height: 18px;
        border-right: 1px solid rgba(0, 0, 0, .1);
    } 
`


export const CreatePopup = styled.ul`
    width: 345px;
    background: #fff;
    position: absolute;
    top: 35px;
    right: calc(50% - 175px);
    border: 1px solid rgba(0, 0, 0, .15);
    box-shadow: 0 3px 8px rgba(0, 0, 0, .3);
    margin: 0;

    &::before {
        content: '';
        position: absolute;
        left: calc(50% - 10px);
        top: -7px;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid #fff;
    }   

    h4 {
        position: relative;
        color: rgb(0, 0, 0, 0.7);
        text-align: left;
        padding: 8px 12px 6px;

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
        }
    }
`

export const CreatePoputItem = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    background: #fff;
    min-height: 55px;
    color: rgb(0, 0, 0, 0.7);

    &:hover {
        background: ${darken(0.04, '#fff')};
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, .1);
    }

    svg {
        width: 16px;
        height: 16px;
    }

    span {
        display: flex;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 8px;
    }

    p {
        font-weight: normal;
        text-align: left;
    }

`


export const OtherOptionsPopup = styled.ul`
    width: 246px;
    position: absolute;
    background: #fff;
    top: 35px;
    right: 0px;
    border: 1px solid rgba(0, 0, 0, .15);
    box-shadow: 0 3px 8px rgba(0, 0, 0, .3);
    margin: 0;

    li {
            padding-left: 34px;
            padding-top: 5px;
            padding-bottom: 5px;
            text-align: left;
            font-size: 12px;
            cursor: pointer;

            &:hover {
                background: #4267b2;
                color: #fff;
            }
        }

    &::before {
        content: '';
        position: absolute;
        right: 8px;
        top: -9px;
        width: 0;
        height: 0;
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 9px solid #fff;
    }   

    section {
        position: relative;
        padding: 5px 0;

      

        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            margin-left: 10px;
            width: 230px;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
        }

    }

   
`