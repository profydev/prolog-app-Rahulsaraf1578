import styled from "styled-components";
import { Routes } from "@config/routes";
import Link from "next/link";

const Header = styled.header`
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;

  background: white;
`;

const Container = styled.div`
  box-sizing: border-box;
  height: 80px;
  width: 1280px;
  margin: auto;
  display: flex;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
`;

// Mine
// const Navbar = styled.ul`
//   display: flex;
//   list-style:none;
// `

// const NavItem = styled.li`

// `

// const NavLink = styled.a`
// text-decoration:none;
// padding:32px;
// color:#667085;
// `

// const DashboardButton = styled.button`
//   background-color:#7F56D9;
//   border-radius:8px;
//   padding:10px 18px;
//   box-sizing: border-box;
//   align-items: center;
//   width: 165px;
//   height: 44px;
//   border: 1px solid #7F56D9;
// `

// const DashboardLink  = styled.a`
//   color:white;
//   text-decoration:none;
//   font-family: 'Inter';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 16px;
//   line-height: 24px;
//   display :flex;
//   align-items: center;
//   top:10px;
//   left:18px;
// `

// His
const NavItems = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  padding: 0 16px;
`;

const NavLink = styled.a`
  color: #667085;
  text-decoration: none;
  font-weight: 500;
`;

const DashboardButton = styled.a`
  padding: 0px 18px;
  background-color: #7f56d9;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  line-height: 44px;
`;

const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  return (
    <div>
      <Header>
        <Container>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/logo-large.svg" alt="Prolog logo" />

          {/* Mine */}
          {/* <nav>
          <Navbar>
            <NavItem><NavLink href="/">Home</NavLink></NavItem>
            <NavItem><NavLink href="/products">Products</NavLink></NavItem>
            <NavItem><NavLink href="/documentation">Documentation</NavLink></NavItem>
            <NavItem><NavLink href="/pricing">Pricing</NavLink></NavItem>
          </Navbar>
        </nav> */}

          {/* His */}
          <nav>
            <NavItems>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/products">Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/documentation">Documentation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/pricing">Pricing</NavLink>
              </NavItem>
            </NavItems>
          </nav>

          <DashboardButton href={Routes.projects}>
            Open Dashboard
          </DashboardButton>
          {/* <DashboardButton>
        </DashboardButton> */}
        </Container>
      </Header>
      <ContactButton
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal"
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
    </div>
  );
};

export default IssuesPage;
