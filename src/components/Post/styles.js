import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.div`

    width: 516px;
    margin: 0 auto;
    background: #fff;
    margin-bottom: 10px;
    padding: 12px 12px 0;

    border: 1px solid #dddfe2;
    border-radius: 3px;
`
export const Header = styled.div`
   
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: #616770;
    

    section {
        display: flex;

        img {
            border-radius: 50%;
            margin-right: 10px;
            height: 40px;
            width: 40px;
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
                align-items: center;
                font-size: 12px;
                font-weight: normal;

                i {
                    margin-left: 4px;
                }
            }
        }
    }

`
export const Content = styled.div`
    margin-top: 10px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.38;   
    color: #1d2129;

    img {
        margin-top: 12px;
        width: 100%;
    }
`

export const Counts = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #606770;
    font-size: 13px;  
`

export const LikesCount = styled.section`
    display: ${props => props.hasLikes ? 'flex' : 'none'};
    align-items: center;

    i {
        margin-right: 4px;
    }
`


export const CommentsCount = styled.section`
    a {
        color: #606770;
    }

    display: ${props => props.hasComments ? 'block' : 'none'};
    margin-left: auto;
`

export const ActionButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    padding: 4px 0;
    border-top: 1px solid rgba(0, 0, 0, .1);
    border-bottom: 1px solid rgba(0, 0, 0, .1);

  
`

export const ActionButton = styled.button`
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

    i {
        margin-right: 6px;
    }

    &:hover {
        background: ${darken(0.06, '#fff')}
    }
` 




export const Comments = styled.div`
    margin-top: 10px;
    display: ${props => props.showComments ? 'block' : 'none'};
 img {
        border-radius: 50%;
        height: 32px;
        width: 32px;
        margin-right: 6px;
    }
`

export const NewComment = styled.div`
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

export const Comment = styled.div`
    display: flex;
    margin-bottom: 8px;

    span {
        span {
            display: flex;
            align-items: baseline;
        }
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

        time {
            margin-top: 4px;
            font-size: 12px;
            font-weight: normal;
            color: #616770;
            margin-left: 5px;
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

