import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { darken } from 'polished';


export const Scroll = styled(PerfectScrollbar)`
   background: #e9ebee;
   height: 100%;
`

export const Content = styled.div`
    width: 850px;
    margin: auto;

`

export const CoverPhotoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: url(${props => props.coverPhoto});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 315px;
    cursor: pointer;
`

export const ProfilePicture = styled.section`
    display: flex;
    align-items: flex-end;

    span {
        margin-bottom: -30px;
        margin-left: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        height: 168px;
        width: 168px;
        border-radius: 100%;
        
    }

    p {
        padding: 10px 20px;
        color: #fff;
        text-shadow: 0 0 3px rgba(0, 0, 0, .8);
        font-size: 24px;
        font-weight: 500;
        line-height: 30px;
    }

    img {
        height: 160px;
        width: 160px;
        border-radius: 100%;
    }
`

export const ActionButtons = styled.section`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;

    span {
        display: flex;
        flex-direction: row;

        margin-right: 15px;
        border-radius: 2px;
        overflow: hidden;

        button {
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: #f5f6f7;
            border: .5px solid;
            border-radius: 0;
            color: #4b4f56;
            border-color: #ccd0d5;
            padding: 0 10px;
            line-height: 26px;
            font-size: 12px;
            font-weight: bold;

            p {
                margin-left: 6px;
            }

            /* i {
                margin-right: 6px;
            } */

            &:hover {

            }

        }
    }
`

export const ProfileMenu = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    height: 43px;
    background: #fff;



`
export const ProfileMenuButtons = styled.div`
    height: 100%;
    border-left:1px solid #e9eaed;
    button {
        height: 100%;
        padding: 0 17px;
        background: none;
        border: 0;
        border-right:1px solid #e9eaed;
        font-size: 14px;
        font-weight: 600;
        color: #385898;

        &:hover {
            background: ${darken(0.03, '#fff')}
        }
    }

`



export const TimeLine = styled.div`
    margin-top: 10px;
    
    display: flex;
    justify-content: space-between;
   
`
export const Posts = styled.div`
    
`

export const TimeLineAside = styled.div`    
    width: 323px;

    div {
        background-color: #fff;
    }    

    h1 {
         display: flex;
         align-items: center;
         font-size: 16px;
         font-weight: normal;
         line-height: 20px;
         color: #1c1e21;
         padding: 12px 0 0 12px;    

        i {
            margin-right: 8px;
        } 
    }
`

export const TimeLineIntro = styled.div`

    ul {
        padding: 16px 0 4px 12px;
    }

    li {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 4px 0;         

        p {
            display: inline;
            margin-left: 8px;
            font-size: 12px;
            line-height: 16px;
            color: #1d2129;
            flex: 1;
        }

        a {
            display: inline;
            color: #385898;
            cursor: pointer;
            text-decoration: none;
        }
    }

    

   

   
`

export const TimeLinePhotos = styled.div`
    margin-top: 10px;
`

export const TimeLineFriends = styled.div`
    margin-top: 10px;
`

