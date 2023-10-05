import clsx from 'clsx';
import React, { useState } from 'react';
import classes from './Header.module.css';
import { Button } from '@/_components/form';
import BurgerIcon from './_components/BurgerIcon/BurgerIcon';
import { Container } from '@/_components/blocks';

type Props = {
    className?: string,

};

const Header: React.FC<Props> = (props) => {
    const { className = '' } = props;
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);

    const handleOnBurgerClick = () => {
        setIsHeaderOpen((prev) => !prev);
    }

    return (
        <header className={clsx(className, classes.header, isHeaderOpen && classes.opened)}>
            <Container className={classes.header__container}>
                <div className={classes.header__logoWrap}>
                    <span className='font-700 text-sm text-white'>Jp</span>
                </div>

                <nav className={classes.header__nav}>
                    <ul className={classes.header__navItems}>
                        <li className={classes.hader__navItem}>
                            <a href="#" className={classes.hader__navLink}>About</a>
                        </li>
                        <li className={classes.hader__navItem}>
                            <a href="#" className={classes.hader__navLink}>Experience</a>
                        </li>
                        <li className={classes.hader__navItem}>
                            <a href="#" className={classes.hader__navLink}>Work</a>
                        </li>
                        <li className={classes.hader__navItem}>
                            <a href="#" className={classes.hader__navLink}>Contact</a>
                        </li>
                        <li className={classes.hader__navItem}>
                            <Button
                                id="RESUME_BTN"
                                label='Resume'
                                varient="outlined"
                            />
                        </li>
                    </ul>
                </nav>

                <BurgerIcon
                    className={classes.header__burger}
                    isOpen={isHeaderOpen}
                    onClick={handleOnBurgerClick}
                />
            </Container>
        </header>
    );
}

export default Header;


