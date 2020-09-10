import React, { Component } from 'react';
import axios from 'axios';

import styles from './home.module.scss';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const products = await axios.get('/api/products');

    this.setState({
      products: products.data,
    });
  }

  onNameChange(event) {
    this.name = event.target.value;
  }

  onDescriptionChange(event) {
    this.description = event.target.value;
  }

  onPriceChange(event) {
    this.price = event.target.value;
  }

  async onSubmit(event) {
    event.preventDefault();

    await axios.post('api/products', {
      product: {
        name: this.name,
        description: this.description,
        price: this.price,
      },
    });

    this.fetchProducts();
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>Products:</h2>
        <div className={styles.productCardContainer}>
          {
            this.state.products.map(product => (
              <div className={styles.productCard} key={product.id}>
                <b>Name: </b>{product.name}
                <br/>
                <b>Description: </b>{product.description}
                <br/>
                <b>Price: </b>{product.price}
              </div>
            ))
          }
        </div>

        <h2>Create productss</h2>

        <form onSubmit={this.onSubmit}>
          <label>
            Name &nbsp;
            <input onChange={this.onNameChange} />
          </label>
          <br />
          <label>
            Description &nbsp;
            <input onChange={this.onDescriptionChange} />
          </label>
          <br />
          <label>
            Price &nbsp;
            <input onChange={this.onPriceChange} />
          </label>
          <br />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export { Home };
