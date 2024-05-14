import styled from 'styled-components';
import background from '../../assets/background2.svg'
export const Container = styled.div`
    background: url(${background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; 
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 15px;
    width: 250px;
    height: 100px;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    color: #fff;
    text-align: center;
    margin-bottom: 45px;
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 230px;
    height: 40px;
    border: none;
    outline: none;
    margin-top: 20px;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #eeeeee;
   }

   button { 
    background: none;
    border: none;
    cursor: pointer;

   } 
`;

/*export const Button = styled.button`
    width: 230px;
    height: 50px;
    margin-top: 100px;
    background: transparent; //${ props => props.isBack ? 'transparent' : '' };
    border-radius: 14px;
    border: 1px solid #eee;    //${ props => props.isBack ? '1px solid #eee' : 'none'};
    outline: none;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    line-height: 28px;
    color: #ffffff;
    cursor: pointer; 

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.5;
    }

    img {
      transform: rotateY(180deg);
    }

    `;*/





