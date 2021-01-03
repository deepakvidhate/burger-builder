import React, { Component } from 'react';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import Aux from '../Auxiliary/Auxiliary';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }


    sideDrawerCloseHander = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        }
        );

    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHander} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;