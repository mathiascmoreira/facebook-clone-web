import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

import cEZxyDgx6Ho from '../../assets/cEZxyDgx6Ho.png';
import QkYdDnD16 from '../../assets/QkYdDnD16.png';
import KnYDHb9XAAp from '../../assets/KnYDHb9XAAp.png';
import frjXXnCCUb5 from '../../assets/frjXXnCCUb5.png';


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

            &:hover {

            }

        }
    }

`

export const AddFriendIcon = styled.i`

    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: auto;
    background-repeat: no-repeat;           
    position: relative;
    vertical-align: top;
    margin-right: 6px;

    background-position: 0 0;
    background-image: url(${cEZxyDgx6Ho});
`

export const FollowIcon = styled.i`
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: auto;
    background-repeat: no-repeat;           
    position: relative;
    vertical-align: top;
    margin-right: 6px;

    background-position: -461px -71px;
    background-image: url(${QkYdDnD16});

`

export const MessageIcon = styled.i`
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: auto;
    background-repeat: no-repeat;           
    position: relative;
    vertical-align: top;
    margin-right: 6px;

    background-position: 0 -182px;
    background-image: url(${KnYDHb9XAAp});
`

export const MoreOptionButton = styled.i`
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: auto;
    background-repeat: no-repeat;           
    position: relative;
    vertical-align: top;

    background-position: -51px -2266px;
    background-image: url(${frjXXnCCUb5});
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
export const TimeLineAside = styled.div`    
    width: 323px;
`

export const Posts = styled.div`
    
`

export const Post = styled.div`
    background: #666;
    width: 514px;
    margin: 0 auto;
    background: #fff;
    margin-bottom: 10px;
`

export const TimeLineIntro = styled.div`
    background: #fff;
`

export const TimeLinePhotos = styled.div`
    margin-top: 10px;
    background: #fff;
`

export const TimeLineFriends = styled.div`
    margin-top: 10px;
    background: #fff;
`

