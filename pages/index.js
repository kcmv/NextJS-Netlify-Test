import Layout from "../components/Layout"
import { Container, Row, Col, Alert } from "react-bootstrap"

const Homepage = () => {
  return (
    <>
      <Layout />
      <Container>
        <Row>
          <Col>
            <Alert key={1} variant={"primary"}>
              This is the homepage. Navigate posts using the Nav link above.
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Homepage
