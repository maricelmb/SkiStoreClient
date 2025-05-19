const products = [
  {name: 'product1', price: 100.0},
  {name: 'product2', price: 100.0},
  {name: 'product2', price: 100.0}
]

function App() {
  return (
    <div>
      <h1 style={{color: 'red'}}>Ski Store</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        )
        )}
      </ul>
    </div>
  );
}

export default App;
