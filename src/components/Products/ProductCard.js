
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProductForm from './ProductForm';
import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import './ProductCard.css';

const ProductCard = (props) => {

    const cartContext = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartContext.addItem({
            id: props.id,
            title: props.title,
            amount: amount,
            price: props.price
        });
    };

    return (
    <Col sm={4}>
        <Card style={{ width: '20rem' }} >
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text className="product-description">{props.description}</Card.Text>
                <Card.Text>${props.price}</Card.Text>
                <ProductForm  onAddToCart={addToCartHandler} id={props.id}/>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default ProductCard;