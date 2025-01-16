'use client'
import Sidebar from "@/app/(pages)/components/Sidebar/Sidebar";
import styled from "styled-components";

const LayoutContainer = styled.div`
display: flex;
    height: 100vh;
    flex-direction: row;
    overflow: hidden;
`

const SidebarContainer = styled.div`
    width: 270px;
    flex: none;
`


const ChildrenContainer = styled.div`
flex-grow: 1;
    padding: 48px;
    overflow-y: auto;
`

interface Props {
    children: React.ReactNode;
}

const  Layout: React.FC<Props> = ({children}) =>{
    return (
        <LayoutContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <ChildrenContainer>
                {children}
            </ChildrenContainer>
        </LayoutContainer>
    )
}

export default Layout;