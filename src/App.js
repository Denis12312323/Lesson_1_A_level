import logo from './logo.svg';
import './App.css';

const MenuItem = ({ children }) =>
    <a class="menu__item" href="#">{children}</a>


const LeftAside = ({ children = 'Aside 1' }) =>
    <aside class="aside-left">{children}</aside>;


const RightAside = ({ children = 'Aside 2' }) =>
    <aside class="aside-right">{children}</aside>;


const Card = ({
    children,
    link = <a href="#" class="btn">Go</a>,
    images = <img src="image.webp" alt="image" />,
    title = <h3>Lorem ipsum dolor sit amet.</h3>
}) =>
    <div class="card">
        {images}
        {title}
        <p>{children}</p>
        {link}
    </div>;

const Content = ({ children }) =>
    <p class="content__text">{children}</p>

const Footer = ({ footer = 'Footer' }) =>
    <footer class="footer">{footer}</footer>;


function App() {
    return (
        <div className="App">
            <div class="wrapper">
                <header class="header">
                    <nav class="main-nav hamburger-menu">
                        <a href="#" class="header__logo"><img src="logo.png" alt="logo" /></a>
                        <input id="menu__toggle" type="checkbox" />
                        <label class="menu__btn" for="menu__toggle">
                            <span></span>
                        </label>
                        <ul class="menu__box">
                            <li><MenuItem children='Головна' /></li>
                            <li><MenuItem children='Проекти' /></li>
                            <li><MenuItem children='Команда' /></li>
                            <li><MenuItem children='Блог' /></li>
                            <li><MenuItem children='Контакти' /></li>

                        </ul>
                    </nav>
                </header>
                <main class="main">
                    <LeftAside />
                    <section class="content">
                        <Content>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae commodi, porro vero ratione aspernatur tempore earum saepe necessitatibus ipsa nam deserunt facere labore quas alias voluptatum fuga reiciendis pariatur accusantium voluptates nemo recusandae velit? Facilis fugit corrupti ex vel quae a, doloribus perferendis reiciendis.</Content>
                        <h1 class="content__title">our work</h1>
                        <div class="main-cards">
                            <Card children='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, earum, expedita eaque aspernatur sit nihil ab corrupti id esse aperiam, distinctio ipsam nisi. Aspernatur, iste!' />
                            <Card children='Lorem ipsum dolor sit amet.' />
                            <Card children='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim modi consequuntur molestias illo optio.' />
                            <Card children='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ducimus.' />
                            <Card children='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam deserunt rerum doloribus tempora aperiam, unde error dolor? Officiis blanditiis fuga incidunt sed. Doloribus, numquam nesciunt!' />
                            <Card children='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam deserunt rerum doloribus tempora aperiam, unde error dolor? Officiis blanditiis fuga incidunt sed. Doloribus, numquam nesciunt!' />
                        </div>
                    </section>
                    <RightAside />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
