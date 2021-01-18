import React, { Component } from 'react';
import styles from './Modal.module.css';
import { Transition, CSSTransition, TransitionGroup } from 'react-transition-group'
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const animationTiming = {
    enter: 400,
    exit: 1000
};

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }


    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <CSSTransition
                    mountOnEnter
                    unmountOnExit
                    in={this.props.show}
                    timeout={animationTiming}
                    classNames={{
                        enter: '',
                        enterActive: styles.ModalOpen,
                        exit: '',
                        exitActive: styles.ModalClosed
                    }}>
                    {state => {
                        const cssClass = [
                            styles.Modal,
                            state === 'entering'
                                ? styles.ModalOpen
                                : state === 'exiting'
                                    ? styles.ModalClosed
                                    : null

                        ];

                        return (
                            <div
                                className={cssClass.join(' ')}>
                                {this.props.children}
                            </div>
                        );
                    }}
                </CSSTransition>
            </Aux>
        );
    }
}

export default Modal;