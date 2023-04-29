import styled from "styled-components";
import React from "react";

interface StyledCardProps { layout: string }

const StyledCard = styled.section<StyledCardProps>`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 60px;
    flex-direction: ${({layout}) => layout};

    img {
        width: 80%;
    }

    & > div {
        flex: 1;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`

interface CardProps {
    item: {
        id: number,
        title: string,
        body: string,
        image: string,
    }
}

const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <StyledCard layout={item.id % 2 === 0 ? "row-reverse" : "row"}>
            <div>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>

            <div>
                <img src={`/imgs/${item.image}`} alt=""/>
            </div>
        </StyledCard>
    )
}

export default Card