import React from 'react';
import Card from '../components/Card';
import garrafas from '../assets/images/3garrafas.png';
import loreim from '../assets/images/loreim.png';
import joseportugal from '../assets/images/joseportugal.png';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Neveria 3 Garrafas',
                    subTitle: '¡Saborea tus momentos!',
                    imgSrc: garrafas,
                    link: 'https://instagram.com/neveria3garrafas/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Lörein',
                    subTitle: 'Mexican Symphonic Metal',
                    imgSrc: loreim,
                    link: 'https://www.facebook.com/LorienSymphonic',
                    selected: false
                },
                {
                    id: 2,
                    title: 'JP Fashion & Graphics',
                    subTitle: '¡El mejor dia de mi vida!',
                    imgSrc: joseportugal,
                    link: 'https://www.facebook.com/Jos%C3%A9-Portugal-Fashion-Design-102250468007184',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;