import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';
import OR1DCQlFvIn from '../../assets/OR1DCQlFvIn.png';
import piy8Uulmo7R from '../../assets/piy8Uulmo7R.png';
import h51cIRDcA8u from '../../assets/h51cIRDcA8u.png';
import k8IkhLskuT from '../../assets/k8IkhLskuT.png';


export const Wrapper = styled.div`
 background: #e9ebee;
    height: 100%;
`

export const Scroll = styled(PerfectScrollbar)`
   background: #e9ebee;
`
export const Post = styled.div`

    width: 500px;
    margin: 0 auto;
    background: #fff;
    margin-top: 20px;
    padding: 12px 12px 0;

    border: 1px solid #dddfe2;
    border-radius: 3px;
`
export const PostHeader = styled.div`
   
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: #616770;
    

    section {
        display: flex;
       

        img {
            border-radius: 50%;
            margin-right: 10px;
        }

        span  {
            h5 {
                font-weight: 600;
                font-size: 14px;
                color: #385898;
            }

            time {
                margin-top: 4px;
                display: flex;
                align-items: flex-end;
                font-size: 12px;
                font-weight: normal;

                svg {
                    margin-left: 4px;
                }
            }
        }
    }

`
export const PostContent = styled.div`
    margin-top: 10px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.38;   
`

export const PostCounts = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #606770;
    font-size: 13px;  
`

export const PostLikesCount = styled.section`
    display: ${props => props.hasLikes ? 'flex' : 'none'};
    align-items: center;
    p {
        margin-left: 8px;
    }
`

export const PostLikeIcon = styled.i`
        width: 18px;
        height: 18px;
        background-position: -68px -1138px;
        background-image:  url(${OR1DCQlFvIn});
        background-size: auto;
        background-repeat: no-repeat;           
        position: relative;
        vertical-align: top;
        margin-right: -3px;
`



export const PostCommentsCount = styled.section`
    a {
        color: #606770;
    }

    display: ${props => props.hasComments ? 'block' : 'none'};
    margin-left: auto;
`

export const PostActionButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    padding: 4px 0;
    border-top: 1px solid rgba(0, 0, 0, .1);
    border-bottom: 1px solid rgba(0, 0, 0, .1);
`

export const PostActionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 13px;
    width: 100%;
    color: ${props => props.hasOwnLike ? '#2078F4' : '#606770'};
    border: none;
    border-radius: 2px;
    height: 32px;
    background: none;

    &:hover {
        background: ${darken(0.06, '#fff')}
    }
` 


const PostActionIcon = styled.i`
    display: inline-block;
    width: 18px;
    height: 18px;
    background-size: auto;
    background-repeat: no-repeat;           
    position: relative;
    vertical-align: top;
    margin-right: 6px;
`

export const PostActionLikeIcon = styled(PostActionIcon)`
   ${({hasOwnLike}) =>  hasOwnLike ?
        `background-position: -21px -279px;
         background-image: url(${k8IkhLskuT});` : 
        `background-position: -19px -443px;
         background-image: url(${piy8Uulmo7R});`
    }
`
export const PostActionCommentIcon = styled(PostActionIcon)`
    background-position: 0 -156px;
    background-image: url(${h51cIRDcA8u});
   
`
export const PostActionShareIcon = styled(PostActionIcon)`
    background-position: -19px -175px;
    background-image: url(${h51cIRDcA8u});
`



export const PostComments = styled.div`
    margin-top: 10px;
    display: ${props => props.showComments ? 'block' : 'none'};
 img {
        border-radius: 50%;
        height: 32px;
        width: 32px;
        margin-right: 6px;
    }
`

export const PostNewComment = styled.div`
    display: flex;
    font-size: 12px;
    margin-bottom: 8px;

    input {
        
        width: 100%;
        background-color: #f2f3f5;
        border: 1px solid #ccd0d5;
        border-radius: 16px;
        line-height: 16px;
        padding: 8px 12px;

        &::placeholder {
            color: #8d949e;            
        }

        &:focus::placeholder {
            color: ${transparentize(0.5 ,'#8d949e')}
        }
    }
`

export const Postcomment = styled.div`
    display: flex;
    margin-bottom: 8px;

   

    span {
        a {
            margin-left: 10px;
            color: #385898;
            cursor: pointer;
            text-decoration: none;
            font-size: 12px;
        }

        a:hover {
                text-decoration: underline;
            }

        p {
            a {
                margin: 0;
                font-weight: 600;
                font-size: 13px;
            }

           

            background: #f2f3f5;
            border-radius: 18px;
            padding: 8px 10px;
            font-size: 13px;
        }
    }

   
`

