import styled from 'styled-components';
import ZlLXmeC1YY from '../../assets/ZlLXmeC1YY.png';
import { darken } from 'polished';

export const LoginHeader = styled.div`
    height: 82px;
    background: #3b5998;
`

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 13px;
    width: 980px;
    margin: 0 auto;


`

export const HeaderIcon = styled.i`

    display: inline-block;
    width: 170px;
    height: 34px;
    background-size: auto;
    background-repeat: no-repeat;           
    position: relative;
    vertical-align: top;
    margin-right: 6px;
    
    background-position: 0 -196px;
    background-image: url(${ZlLXmeC1YY});
`

export const HeaderControls = styled.form`
    display: flex;
    
    span {
        font-weight: normal;
        margin-left: 14px;
        font-size: 12px;
        color: #fff;
        display: inline-block;

        label {            
            display: block;
            color: #fff;
            margin-bottom: 4px;
        }

        input {
            height: 24px;
            width: 142px;
        }

        span {
            display: flex;
            margin: 0;
            button {
                border-radius: 2px;
                font-size: 12px;
                color: #fff;
                margin-left: 14px;
                font-weight: bold;
                width: 50px;
                height: 24px;
                border: 1px solid;
                background-color: #4267b2;
                border-color: #29487d;
            }

            button:hover {
                background-color: #365899;
                border-color: #29487d;
            }

            button:active {
                background-color: #29487d;
                border-color: #29487d;
            }
        }

        p {
            margin-top: 6px;
            color: rgb(255 ,255, 255, 0.6)
        }

       
    }
`

export const LoginBody = styled.div`
    padding-top: 20px;
    background: linear-gradient(white, #D3D8E8);
    height: 100%;
    
`

export const BodyContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 980px;
    margin: 0 auto;
`
export const BodyPresentation = styled.div`
    width: 580px;
    p {
        margin-top: 20px;
        color: #0e385f;
        font-size: 20px;
        font-weight: bold;
        line-height: 29px;
        width: 450px;
        word-spacing: -1px;
    }

`

export const BodyControls = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;

    input {
        border-color: #bdc7d8;
        width: 100%;
        border-radius: 5px;
        margin-top: 8px;
        font-size: 18px;
        padding: 8px 10px;
        border: 1px solid #ccd0d5;
        color: #999;
    }
     
    span {
        display: flex;

        input + input {
            margin-left:12px;
        }    
    }

    h1 {
        font-size: 36px;
        font-weight: 600;
       
    }

    h3 {
        margin-top: 5px;
        margin-bottom: 12px;
        color: #1d2129;
        font-size: 19px;
        font-weight: normal;
        line-height: 1.34;
    } 

    p {
        color: #777;
        font-size: 11px;
        width: 316px;
        line-height: 1.34;
        margin-top: 15px;
    }

    a {
        font-size: 11px;
        color: #385898;
        cursor: pointer;
        text-decoration: none;        
    }

    button {
        color: #fff;      
        font-size: 19px;
        font-weight: bold;
        line-height: 126%;
        padding: 7px 20px;
        background: linear-gradient(#67ae55, #578843);
        box-shadow: inset 0 1px 1px #a4e388;
        border: 1px solid;
        border-color: #3b6e22 #3b6e22 #2c5115;
        border-radius: 5px;
        text-shadow: 0 1px 2px rgba(0,0,0,.5);
        margin-top: 20px;
        width: 194px; 
    }

    button:hover {
        background: linear-gradient(#79bc64, #578843);
    }

    button:active {
        margin-top: 21px;
    }

   

   

`

export const BirthDayControls = styled.span`
    display: flex;
    flex-direction: column;

    label {
        margin-top: 20px;
        margin-bottom: 5px;
        color: #90949c;
        font-size: 16px;
        font-weight: bold;
    }

    select {
        font-size: 13px;
        height: 30px;
        padding: 5px;
        background-color: #fff;
        color: #1c1e21;
        border: 1px solid #ccd0d5;
    }

   
    
`

export const GenderControls = styled.span`
    display: flex;
    flex-direction: column;

    label {
        margin-top: 10px;
        margin-bottom: 5px;
        color: #90949c;
        font-size: 16px;
        font-weight: bold;
    }

    
    span {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        label {
            color: #1d2129;
            font-size: 18px;
            font-weight: normal;
            line-height: 18px;
            padding: 0 10px 0 3px;
        }
    }   
    
`




export const LoginFooter = styled.div`


`

