import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
