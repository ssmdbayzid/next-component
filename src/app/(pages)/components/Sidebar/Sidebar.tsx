'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from "next/link";

// Define the type for props
interface SidebarProps {
    $isOpen: boolean;
}

const SidebarContainer = styled.div`
    position: relative;
`;

const SidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;
    position: fixed;
    z-index: 1000;
    padding-left: 1rem;
    border-bottom: 1px solid white;
    width: 100%;
    max-width: 265px;
    margin: 0 auto;
`;

const HeaderTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    top: 1rem;
`;

const MenuButton = styled.button<SidebarProps>`
    background: none;
    border: none;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    left: ${(props) => (props.$isOpen ? '240px' : '30px')};
    z-index: 1000;
    font-size: 1.5rem;
    color: ${(props) => (props.$isOpen ? '#fff' : '#333')};

    &:hover {
        color: #00bcd4;
    }
`;

const SidebarWrapper = styled.div<SidebarProps>`
    position: fixed;
    top: 0;
    left: ${(props) => (props.$isOpen ? '0' : '-250px')};
    height: 100%;
    width: 250px;
    background-color: #333;
    color: white;
    transition: left 0.3s ease;
    z-index: 999;
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const MenuList = styled.ul`
    list-style: none;
    padding: 40px 0 0;
    margin: 0;
`;

const MenuItem = styled.li`
  margin: 1rem 0;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    display: block;
    width: 100%;
    &:hover {
      color: #00bcd4;
    }
  }
`;

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SidebarContainer>
            <SidebarHeader>
                <HeaderTitle>{isOpen ? "dashboard" : "D"}</HeaderTitle>
                <MenuButton $isOpen={isOpen} onClick={toggleSidebar}>
                    {isOpen ? <FiX /> : <FiMenu />}
                </MenuButton>
            </SidebarHeader>
            <SidebarWrapper $isOpen={isOpen}>
                <MenuList>
                    <MenuItem>
                        <Link href="/dashboard">Home</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="/dashboard/reports">Reports</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#services">Services</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href="#contact">Contact</Link>
                    </MenuItem>
                </MenuList>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
