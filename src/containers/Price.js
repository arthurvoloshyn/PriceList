import React, { Component } from 'react';
import cn from 'classnames';

import { products } from '../utils';

import Input from '../components/Input';

import bg from '../img/bg.png';

class Price extends Component {
  inputMaxLength = 2;
  state = {
    products,
    sum: 55,
    stayDays: 7
  };

  onInputChange = ({ target: { value } }) => {
    const stayDays = value.slice(0, this.inputMaxLength);

    this.setState({ stayDays });
    this.updateSum(stayDays);
  };

  onInputSubmit = e => {
    e.preventDefault();
  };

  changeAdd = index => {
    const { products } = this.state;
    products[index].add = !products[index].add;

    this.setState({
      products
    });
  };

  updateSum = stayDays => {
    const { products } = this.state;
    let allItemsSum = 0;
    let addPrice;

    products.forEach(({ price, dayPrice, add }) => {
      const singlePrice = 1;
      const totalDays = dayPrice ? stayDays : singlePrice;

      addPrice = price * totalDays;

      if (add) {
        allItemsSum += addPrice;
      }
    });

    this.setState({
      sum: allItemsSum
    });
  };

  handleClick = ({
    currentTarget: {
      dataset: { index }
    }
  }) => {
    const { stayDays } = this.state;

    this.changeAdd(index);
    this.updateSum(stayDays);
  };

  render() {
    const { products, sum, stayDays } = this.state;

    return (
      <div className="card">
        <h2>Additional services</h2>

        <div className="wrap">
          <div className="left">
            <img src={bg} alt="Prices" />

            <div className="form">
              <label className="prev__input form-label" htmlFor="days">
                Stay time:
              </label>

              <Input value={stayDays} onChange={this.onInputChange} onSubmit={this.onInputSubmit} id="days" />

              <label className="after__input form-label" htmlFor="days">
                Days
              </label>
            </div>
          </div>

          <div className="right">
            <ul>
              {products.map(({ add, dayPrice, name, price }, index) => (
                <li data-index={index} onClick={this.handleClick} className="product price__add" key={index}>
                  {add ? <i className="fas fa-check-circle icon icon-delete delete" /> : <i className="fas fa-plus-circle icon icon-add add" />}

                  <div className="price__descr">
                    <div
                      className={cn('price__item', {
                        'day-price': dayPrice
                      })}
                    >
                      {name}
                    </div>
                  </div>

                  <div
                    className={cn('price', {
                      'day-price': dayPrice
                    })}
                  >
                    € {price}.<sup>00</sup>
                  </div>
                </li>
              ))}
            </ul>

            <div className="price__summe">
              <h3>total:</h3>

              <span className="summe-span">
                € {sum}.<sup>00</sup>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Price;
