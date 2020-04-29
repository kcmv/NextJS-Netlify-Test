import Posts from "../data/posts.json"
import Link from "next/link"
import Head from "next/head"
import {
  Nav,
  Container,
  Row,
  Col,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"

const Header = () => {
  return (
    <>
      <Head>
        <title>NexJS-Test</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
      </Head>
      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Homepage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {Posts.map((item, key) => {
                return (
                  // <Nav.Link key={item.id}>
                  <Link href={`/post/${item.id}`} key={item.id}>
                    <a> {item.title}</a>
                  </Link>
                  // </Nav.Link>
                )
              })}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  )
}

export default Header
