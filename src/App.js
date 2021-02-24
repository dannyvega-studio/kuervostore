import React from 'react';
import './App.css';
//Bootstrap//
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
//Componentes//
import Footer from './components/Footer';
//Paginacion//
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import logo from './assets/images/logo.png'

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: 'Kuervo Store - Figures & Collectibles',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Figma', path: '/figma' },
        { title: 'Nendoroid', path: '/nendoroid' }
      ],
      home: {
        title: 'Kuervo Store',
        subTitle: 'From Japan to the World!',
        text: 'Figures & Collectibles.'
      },
      figma: {
        title: 'Kuervo Store',
        subTitle: 'From Japan to the World!',
        text: 'Figures & Collectibles.'
      },
      nendoroid: {
        title: 'Kuervo Store',
        subTitle: 'From Japan to the World!',
        text: 'Figures & Collectibles.'
      }
    }
  }

render() {
  return (
    <div className="App">

      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom navbar-light sticky-top" expand="lg">
            <Navbar.Brand className="d-block d-md-block d-lg-none"><img src={logo} width="75px" alt="Kuervo Store" /></Navbar.Brand>
            
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto mr-auto">
                <Link className="nav-link centrar-nav-items" to="/">Home</Link>
                <Link className="nav-link centrar-nav-items" to="/figma">Figma</Link>
                <Navbar.Brand className="d-none d-md-none d-lg-block"><img src={logo} width="75px" alt="Kuervo Store" /></Navbar.Brand>
                <Link className="nav-link centrar-nav-items" to="/nendoroid">Nendoroid</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/figma" render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subTitle} />} />
          <Route path="/nendoroid" render={() => <PortfolioPage title={this.state.portfolio.title} subTitle={this.state.portfolio.subTitle} text={this.state.portfolio.text} />} />
          
          <Footer />
          
        </Container>
      </Router>
    
      </div>
    );
  }
}

export default App;