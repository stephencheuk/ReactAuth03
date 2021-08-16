import React from 'react';
import {
  SwipeableDrawer,
} from '@material-ui/core';

import useWindowSize from '../../utils/hooks/useWinSize';
import grid from '../../utils/grid';
import clsx from 'clsx';

const Drawer = ({ children, forceclose, ...props }) => {

  const [width] = useWindowSize();

  const gridname = grid(width).symbol;

  if(props.anchor === 'left'){
    props.variant = 'permanent';
    if(gridname === 'xs'){
      props.variant = 'temporary';
    }
  }

  if(props.variant === 'temporary' && forceclose){
    return null;
  }

  return (
        <SwipeableDrawer
          className={
            clsx('ResponseDrawer', {
                        'Closed': !props.open
                  }) }
          { ...props }
          >
          { children }
        </SwipeableDrawer>
  );

}

export default Drawer;
