import Layout from "../components/Layout"
import { Container, Row, Col, Alert } from "react-bootstrap"
import Posts from "../data/posts.json"
import Link from "next/link"

const Homepage = ({ posts }) => {
  return (
    <>
      <Layout />
      <Container>
        <Row>
          <Col>
            {posts.map((item, key) => {
              return (
                <Alert key={item.id} variant={"primary"}>
                  <Link href={{ pathname: `posts/${item.id}` }}>
                    <a>{item.title}</a>
                  </Link>
                </Alert>
              )
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const posts = await Posts
  return {
    props: {
      posts,
    },
  }
}

export default Homepage
