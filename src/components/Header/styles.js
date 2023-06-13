import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: center;
    gap: 10vw;
    padding: 16px;
    border: 1px solid #000;
`;

export const Select = styled.select`
    padding: 0.5vh;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
    }
`;

export const Input = styled.input`
    padding: 0.5vh;
    border-radius: 10px;
`;

export const Button = styled.button`
    font-size: 1.8;
    padding: 0.5vh;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
    }
`;
