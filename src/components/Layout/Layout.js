import React from 'react';

import Aux from '../../hoc/Auxillary';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

const layout = (props) => (
   <Aux>
        <Toolbar />
       <main className={styles.Content}>
          {props.children} 
       </main>
   </Aux>
)

export default layout;