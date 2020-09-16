import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';
import "react-perfect-scrollbar/dist/css/styles.css";

export const Container = styled.div`
    position: relative;
`

export const Scroll = styled(PerfectScrollbar)`
`

export const Posts = styled.div `
    height: 100vh;
    overflow: auto;
`

export const SideMenu = styled.ul`
    cursor: pointer;
    position: fixed;
    left: calc(50vw - 506px);
    width: 230px;
    margin-top: 20px;
    h4 {
        margin-top: 14px;
        margin-bottom: 5px;
        font-size: 13px;
        line-height: 17px;
        color: #616770;
        font-weight: 600;
    }
`

export const SideMenuItem = styled.li`
    display: flex;
    align-items: center;
    line-height: 28px;
    font-size: 13px;
    color: #1d2129;
    border: 1px solid #e9ebee;
    border-radius: 2px;
    background-color: ${props => props.selected ? '#f5f6f7' : '#e9ebee'};
    border-color: ${props => props.selected ? '#dddfe2' : '#e9ebee'};

    &:hover {
        background-color: #f5f6f7;
        border: 1px solid #dddfe2;
        
    }

    i {
        margin-right: 5px;
    }   
    
`

export const NewPost = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 516px;
    margin: 20px auto 10px;
    border: 1px solid #dddfe2;
    border-radius: 3px;

    h1 {
        font-size: 12px;
        font-weight: 600;
        line-height: 1.34;
        padding: 8px 0;
        padding-left: 8px;
        background-color: #f5f6f7;
        border-bottom: 1px solid #dddfe2;
        border-radius: 2px 2px 0 0;
        cursor: pointer;
        color: #4b4f56;
    }
`
export const NewPostInput = styled.span`
    height: 70px;
    padding-left: 14px;
    display: flex;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    input {
        height: 40px;
        width: 100%;
        border: none;
        padding-left: 10px;
        color: #1c1e21;
    }
`

export const NewPostOptions = styled.span`
    display: flex;
    border-top: 1px solid #e9ebee;
    padding: 8px 0;
    margin: 0 10px;

    button {
        padding: 6px 15px;
        margin-right: 6px;
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 1.34;
        color: #4b4f56;
        font-weight: 600;
        border-radius: 18px;
        cursor: pointer;
        border: none;
        background: #f5f6f7;

        &:hover {
            background: ${darken(0.03, '#f5f6f7')}
        }

        i {
            margin-right: 5px;
        }
    }
`


export const Chat = styled.ul`
    box-shadow: 1px 0 0 #f0f0f2 inset;
    border-left: 1px solid rgba(0, 0, 0, .4);
    border-left-color: #ccc;
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    width: 235px;
    height: 100%;
    padding-right: 14px;

    li {
        padding-left: 8px;
        padding-top: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        &:hover {
            background: ${darken(0.03, '#e9ebee')}
        }
    }

    span {
        display: flex;
        align-items: center;
        font-size: 12px;
        line-height: 16px;
        color: #1d2129;
    }


    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 8px;
    }

    time {
        color: #90949c;
        display: inline-block;
        font-size: 11px;
        line-height: 12px;
        text-align: right;
        margin-right: 15px;
    }
  
    
    
`