import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friends = ['Amin Ruhul', 'Tayeb Pabel', 'Sazzatul Zaman', 'Tazriyan Yeasfi', 'Arafat Hridoy', 'Mariya Shila']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Illustrator', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.00' },
    { name: 'Premier', price: '$249.00' },
    { name: 'Teach Your Self', price: '$150' },
    { name: 'Learning React', price: '$66.99' },
    { name: 'Digital Logic', price: '$110' }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul style={{ textAlign: 'left' }}>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product> */}

      </header>
    </div >
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic Users</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1)
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    color: 'black',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    boxShadow: '5px 5px 10px',
    margin: '10px',
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}




export default App;
