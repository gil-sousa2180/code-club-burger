import styled from "styled-components";

export const Button = styled.button`
    width: 230px;
    height: 50px;
    margin-top: 100px;
    background: ${ props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)' };
    border-radius: 14px;
    border: ${ props => props.isBack ? '1px solid #eee' : 'none'};
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
        transform: ${ props => props.isBack && 'rotateY(180deg)'} ;
    }
`;