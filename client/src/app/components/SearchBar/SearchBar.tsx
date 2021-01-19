import React from 'react';
import { useForm } from 'react-hook-form';
import { Navbar, Button, FormControl, InputGroup, } from 'react-bootstrap';
import { history } from 'app/router';
import './SearchBar.scss';

export const SearchBar = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ query }: { query: string }) => history.push(`/items?search=${query}`);

  return (
    <Navbar bg="warning" className="d-flex search-bar">
      <Navbar.Brand href="/">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/logo-ml-min.png`}
          className="d-inline-block align-top"
          alt="logo Mercado Libre"
        />
      </Navbar.Brand>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-grow-1">
        <InputGroup>
          <FormControl
            placeholder="Nunca dejes de buscar"
            aria-label="Nunca dejes de buscar"
            aria-describedby="basic-addon2"
            name="query"
            ref={register}
            data-testid="search-input"
          />
          <InputGroup.Append>
            <Button type="submit" data-testid="search-submit">
              {' '}
              <img src={`${process.env.PUBLIC_URL}/assets/images/search-min.png`} alt="search icon" />
              {' '}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    </Navbar>
  );
};

export default SearchBar;
