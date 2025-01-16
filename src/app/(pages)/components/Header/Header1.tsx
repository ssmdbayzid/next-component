'use client'

import styled from "styled-components";

const Header = styled.header`
position: fixed;
    top: 30px;
    left: 0;
    z-index: 100;
    width: 100%;
    height: auto;
    margin: 0 auto;
    transition: all 0.3s ease;
    //&.on-scroll {
    //    background:hsl(214, 21%, 6%);
    //    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    //    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    //}
`

const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    column-gap: 1.25rem;
    width: 100%;
    height: 4.25rem;
    margin: 0 auto;
`
const Container = styled.div`
    max-width: 75rem;
    height: auto;
    margin: 0 auto;
    padding: 0 1.25rem;
`

const Brand = styled.a`
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -1px;
    color: hsl(206, 5%, 100%);
    text-transform: uppercase;
`

const Burger = styled.div`

    position: relative;
    display: block;
    cursor: pointer;
    user-select: none;
    order: -1;
    z-index: 10;
    width: 1.6rem;
    height: 1.15rem;
    border: none;
    outline: none;
    background: none;
    visibility: visible;
    transform: rotate(0deg);
    transition: 0.35s ease;
    &.burgerLine {
        position: absolute;
        display: block;
        left: 0;
        width: 100%;
        height: 2px;
        border: none;
        outline: none;
        opacity: 1;
        border-radius: 1rem;
        transform: rotate(0deg);
        background-color: hsl(206, 5%, 100%);
        transition: 0.25s ease-in-out;

        &:nth-child(1) {
            top: 0px;
        }
        &:nth-child(2) {
            top: 0.5rem;
            width: 70%;
        }
        &:nth-child(3) {
            top: 1rem;
        }
    }
`
const Header1 = () => {
    return (
        <div>
           <Header>
            <Navbar>
            <Container>
            <Brand>Brand</Brand>
                <Burger>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                    <span className="burgerLine"></span>
                </Burger>
            </Container>
            </Navbar>
           </Header>
        </div>
    )
}

export default Header1;