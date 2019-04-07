import React from 'react'

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close]
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open]
  }
  return (
   <>
        <Backdrop show={props.open} clickBackdrop={props.closed}/>
        <div className={attachedClasses.join(' ')}>
        <div className={styles.Logo}>
        <Logo />
        </div>
            
            <nav>
                <NavigationItems />
            </nav>
        </div>
   </>
  )
}

export default sideDrawer;