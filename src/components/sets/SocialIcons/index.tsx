import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"
import styled from "styled-components";

const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        list-style: none;
    }

    a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
    }
`

const SocialIcons: React.FC = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href="https://twitter.com/ElielsonUrban0"><FaTwitter/></a>
            </li>
            <li>
                <a href="https://facebook.com"><FaFacebook/></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/elielson-urbano-b08654223/"><FaLinkedin/></a>
            </li>
        </StyledSocialIcons>
    ) 
}

export default SocialIcons