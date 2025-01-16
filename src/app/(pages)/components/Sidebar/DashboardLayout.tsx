import styled from 'styled-components';
import Link from 'next/link';

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const SidebarItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 10px 0;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #00bcd4;
  }
`;

const Header = styled.header`
  background-color: #f4f4f4;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

interface Props {
    children: React.ReactNode;
}
const DashboardLayout: React.FC<Props> =({children})=>{
    return(
        <Layout>
            <Sidebar>
                <h2>Dashboard</h2>
                <Link href="/dashboard" passHref>
                    <SidebarItem>Overview</SidebarItem>
                </Link>
                <Link href="/dashboard/reports" passHref>
                    <SidebarItem>Reports</SidebarItem>
                </Link>
                <Link href="/dashboard/analytics" passHref>
                    <SidebarItem>Analytics</SidebarItem>
                </Link>
                <Link href="/dashboard/settings" passHref>
                    <SidebarItem>Settings</SidebarItem>
                </Link>
            </Sidebar>
            <div style={{flex: 1}}>
                <Header>
                    <h1>Dashboard Header</h1>
                </Header>
                <MainContent>{children}</MainContent>
            </div>
        </Layout>
    )
}

export default DashboardLayout;