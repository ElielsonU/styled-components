import { Container, Button, Flex } from "@/components/models"
import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`

const Logo = styled.img`
    @media (max-width: ${({theme}) => theme.mobile}) {
        margin-bottom: 40px;
    }
`

const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 40px 0;
`

const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({theme}) => theme.mobile}) {
        margin: 40px 0 30px;
    }    
`

const Header: React.FC = () => {
    return (
        <>
            <StyledHeader>
                    <Container>
                        <Nav>
                            <Logo src="/imgs/logo.svg" alt=""/>
                            <Button>Try it free</Button>
                        </Nav>

                        <Flex>
                            <div>
                                <h1>Build The Communtity Your Fans Will Love</h1>
                                <p>
                                Huddle re-imagines the way we build communities. You have a voice,
                                but so does your audience. Create connections with your users as
                                you engage in genuine discussion.
                                </p>
                                <Button bg="#ff0099" color="#fff">
                                    Get Started For Free
                                </Button>
                            </div>

                            <Image src="/imgs/illustration-mockups.svg"/>
                        </Flex>
                    </Container>
            </StyledHeader>
        </>
    )
}

export default Header