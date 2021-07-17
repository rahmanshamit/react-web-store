import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './ProductCard.css';

import ProductCard from './ProductCard';
import productsList from './ProductsList.json';

const Products = () => {

    return (
    <Container>
        <Row>
        {productsList.map(product => (
            <ProductCard
                id = {product.id}
                key = {product.id}
                title = {product.title}
                price = {product.price}
                description = {product.description}
                image = {product.image}
            />
        ))}
        </Row>
    </Container>
    );
}

export default Products;