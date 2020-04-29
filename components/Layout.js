import { Container, Row, Col } from "react-bootstrap"
import Header from "../components/Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
