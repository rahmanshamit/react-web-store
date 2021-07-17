import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/CartContext';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const [btnIsHightlighted, setBtnIsHighlighted] = useState(false);
    const cartContext = useContext(CartContext);

    const { items } = cartContext;

    const btnClasses = `${classes.button} ${btnIsHightlighted ? classes.bump: ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>
        {cartContext.items.reduce( (currentNumber, item) => {
            return currentNumber + item.amount;
        }, 0)}
        </span>
    </button>
    );
}

export default HeaderCartButton;