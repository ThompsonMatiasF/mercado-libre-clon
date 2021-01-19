import React, {FC, ReactElement} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Layout.scss';

interface LayoutProps {
  header: ReactElement
}

export const Layout: FC<LayoutProps> = ({ header, children }) => (
  <Container fluid>
    <Row className="bg-warning">
      <Container className="display-range">
        <Row className="bg-yellow">
          <Col xs={{ offset: 1, span: 10 }}>{ header }</Col>
        </Row>
      </Container>
    </Row>
    <Row>
      <Container className="display-range">
        <Row>
          <Col xs={{ offset: 1, span: 10 }}>{ children }</Col>
        </Row>
      </Container>
    </Row>
  </Container>
);

export default Layout;
