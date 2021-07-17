import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import headerImage from '../../assets/header_image.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactStore</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={headerImage} alt="Shop Open sign on door"/>
        </div>
    </Fragment>
};

export default Header;