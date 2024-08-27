import React from 'react';
import './NewCollections.css';
import new_collection from '../Assests/new_collections'
import { Item } from '../Item/Item'
import { Container, Row } from 'react-bootstrap';

export const NewCollections = () => {
  return (
    <div className='popular'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <Container>
          <Row>
            {new_collection.map((item, i) => (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
          </Row>
        </Container>
    </div>
  )
}
