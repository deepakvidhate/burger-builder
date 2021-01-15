import React, { Component } from 'react';
import {connect} from 'react-redux';

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
                <Toolbar 
                    isAuth={this.props.isAuthenticated} 
                    drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHander} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps,null)(Layout);