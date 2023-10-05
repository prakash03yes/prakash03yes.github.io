import clsx from 'clsx';
import React from 'react';
import classes from './Header.module.css';
import { Button } from '@/_components/form';

type Props = {
    className?: string,

};

const Header: React.FC<Props> = (props) => {
    const { className = '' } = props;

    return (
        <header className={clsx(className, classes.header)}>
            <div className={clsx("container", classes.header__container)}>
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
                                className='ml-8'
                                id="RESUME_BTN"
                                label='Resume'
                                varient="outlined"
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;