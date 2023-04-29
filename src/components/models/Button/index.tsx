import styled from "styled-components";

interface ButtonProps {
    bg?: string,
}

const Button = styled.button<ButtonProps>`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${props => props.bg || '#fff'};
    color: ${props => props.color || '#333'};
    transition: all 200ms ease-in;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`

export default Button
