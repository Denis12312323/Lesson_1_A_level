import logo from './logo.svg';
import './App.css';

const GoodCard = ({title='NoName', url='#', img='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1024px-Cat_August_2010-4.jpg'}) => //title, url - объявление переменных. После `=` - значение по умолчанию
<div className='GoodCard'>
    <h1>{title}</h1> 
    <a href={url}>
        <img src={img} />
    </a> { /*title, url - підстановка в HTML*/ }
</div>
const Main = () => //використання
<main> 
    <GoodCard/>
    <GoodCard title="Bosch" url='https://www.olx.ua/uk/'/>
    <GoodCard title="eBosch" img='https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1024px-Cat_August_2010-4.jpg' />
    <GoodCard title="Braun" />
    <GoodCard title="neBraun" />
</main>

const Header = ({children, size = '100px'}) =>
  <header className="App-header">
    <img style = {{minHeight:size}} src={logo} className="App-logo" alt="logo" />
    {children}<br />
  </header>
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {2+2}<br/>
        2+2<br/>
        {NAME}
      </header> */}
      {/* <Header>
        Hello
      </Header>
      <Header size = "200px">
        <h1>Hello JavaScript</h1>
      </Header> */}
      <Main/>
      {/* <Main/>
      <Footer/> */}
      
    </div>
  );
}

export default App;
