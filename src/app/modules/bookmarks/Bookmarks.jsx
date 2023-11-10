import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import './style.css';

const Bookmark = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("bookmarks")));
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row>
          {data?.length ? data?.map((ele, idx) => (<Col key={idx} xs={12} md={6} lg={4}>
            <div className="card rounded mb-3 shadow-sm bookmarkCards">
              <div className="card-header"><h3 className="mb-0 text-uppercase name"><span className="me-2">Name:</span>{ele.name}</h3></div>
              <div className="card-body d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-0 text-uppercase"><span className="fw-bold me-2">Owner Login:</span>{ele.owner.login}</h6>
                </div>
                <h6 className="mb-0 mt-4 fw-bold">Description</h6>
                <p className="mb-0 text-muted desc">{ele.description ? ele.description : `Empty`}</p>
                <h6 className="mb-0 mt-4 fw-bold">Stars</h6>
                <p className="mb-0 bg-success rounded p-1 text-white count mt-1">{ele.stargazers_count}</p>
              </div>
            </div>
          </Col>)) : <Alert variant={`danger`}>
            There are no records to display
          </Alert>}
        </Row>
      </Container>
    </>
  );
};
export default Bookmark;
