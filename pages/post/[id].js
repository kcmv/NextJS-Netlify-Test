import { useRouter } from "next/router"
import Link from "next/link"
import Posts from "../../data/posts.json"
import Layout from "../../components/layout"
import { Container, Row, Col, Alert } from "react-bootstrap"

const PostID = () => {
  const { query } = useRouter()
  let PostItem = []
  if (query.id) {
    for (let i = 0; i < Posts.length; i += 1) {
      if (Posts[i].id === parseInt(query.id)) {
        PostItem.push(Posts[i])
      }
    }
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            {" "}
            {PostItem.map((item, key) => {
              return (
                <>
                  <Alert
                    key={`${item.id}-${new Date().getSeconds()}`}
                    variant={"primary"}
                  >
                    ID: {item.id}
                  </Alert>
                  <Alert
                    key={`${item.id}-${new Date().getSeconds()}`}
                    variant={"secondary"}
                  >
                    Title: {item.title}
                  </Alert>
                </>
              )
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default PostID
