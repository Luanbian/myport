import styled from 'styled-components';

export const Total = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: blue;
`
export const Button = styled.button`
    width: 150px;
    height: 150px;
    display:flex;
    align-items: center;
    justify-content: center;
    border:0px;
    color:#fff;
    cursor:pointer;
    background: green;
    position: relative;
    transition: all .25s ease;
    :active{
        transform: scale(o.85);
    }
`;

export const Bg = styled.div`
    position: absolute;
    width:60px;
    background: red;
    height: 60px;
    border-radius:50px;
    pointer-events:none;
    box-shadow: 0px 8px 35px 0px rgba(65,53,214,.25);
`;

export const In = styled.i`
    pointer-events: none;
    font-size: 1.8rem;
    z-index:10;
    position: relative;
`