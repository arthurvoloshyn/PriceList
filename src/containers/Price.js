import React, { Component } from 'react';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { products, imgSrc } from '../utils'
import Input from '../components/Input';

class Price extends Component{
  state = {
    products,
    sum: 55,
    stayDays: 7,
  };

  onInputChange = ({ target: { value } }) => {
    const stayDays = value;

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
      const totalPrice = dayPrice ? stayDays : 1;

      addPrice = price * totalPrice;

      if (add) {
        allItemsSum += addPrice
      }
    });

    this.setState({
      sum: allItemsSum
    });
  };

  handleClick = ({ currentTarget: { dataset: { index } } }) => {
    const { stayDays } = this.state;

    this.changeAdd(index);
    this.updateSum(stayDays);
  };

  render() {
    const { products, sum, stayDays } = this.state;

    return (
      <div className='card'>
        <h2>Additional services</h2>

        <div className='wrap'>
          <div className='left'>
            <img src={imgSrc} alt='Prices' />

            <div className='form'>
              <label className='prev__input form-label' htmlFor='days'>
                Stay time:
              </label>

              <Input
                value={stayDays}
                onChange={this.onInputChange}
                onSubmit={this.onInputSubmit}
                onKeyPress={this.onInputSubmit}
                id='days'
              />

              <label className='after__input form-label' htmlFor='days'>
                Days
              </label>
            </div>
          </div>

          <div className='right'>
            <ul>
              {products.map(({ add, dayPrice, name, price }, index) => (
                <li
                  data-index={index}
                  onClick={this.handleClick}
                  className='product price__add'
                  key={index}
                >

                  {add ? (
                    <FontAwesomeIcon icon={faCheckCircle} className='icon icon-delete delete' />
                  ) : (
                    <FontAwesomeIcon icon={faPlusCircle} className='icon icon icon-add add' />
                  )}

                  <div className='price__descr'>
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

            <div className='price__summe'>
              <h3>total:</h3>

              <span className='summe-span'>
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
