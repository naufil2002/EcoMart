import React, { useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';

const Description = () => {
  const [key, setKey] = useState('description');

  return (
    <Container className="mt-4 border">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 "
      >
        <Tab eventKey="description" title="Description">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
          </p>
        </Tab>
        <Tab eventKey="reviews" title="Reviews (122)">
          <p>Customer reviews will be displayed here.</p>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Description;
