import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {
    let attachedClassed = [styles.SideDrawer, styles.Close];

    if(props.open)
    {
         attachedClassed = [styles.SideDrawer, styles.Open];

    }

    return (
        <Aux>
            <BackDrop show = {props.open} clicked={props.closed}/>
            <div className={attachedClassed.join(' ')}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
