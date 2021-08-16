import { Suspense } from 'react';
import { useSelector } from 'react-redux'
import {
  Divider,
} from '@material-ui/core';

import SwipeableDrawer from './SwipeableDrawer';
import ListItems from './ListItems';

const Layout = ({OpenRight, setOpenRight, OpenLeft, setOpenLeft, menu, ...props}) => {

  const AppState = useSelector((state) => state.App);

  return (
    <>
      <Suspense fallback=" ">
        <SwipeableDrawer
          anchor='left'
          swipeAreaWidth={30}
          open={ OpenLeft }
          onClose={()=>setOpenLeft(false)}
          onOpen={()=>setOpenLeft(true)}
          variant={'persistent'}
          forceclose={ OpenRight }
        >
          <div className="Drawer">
            <div className="DrawerTop">
              <div className='DrawerAvatar flexcm'>
                <div className='Avatar flexcm'>
                  <img src={AppState.profileImg} alt="" title={ AppState.name } />
                </div>
              </div>
              <div className='DrawerUser flexcm'>
                  { AppState.name }
              </div>
            </div>
            <Divider />
            <ListItems menu={ menu } />
          </div>
        </SwipeableDrawer>
      </Suspense>
      <SwipeableDrawer
        anchor='right'
        open={ OpenRight }
        onClose={()=>setOpenRight(false)}
        onOpen={()=>setOpenRight(true)}
        forceclose={ OpenLeft }
      >
        <div className="Drawer">
          <div className='DrawerAvatar flexcm'><div className='Avatar flexcm'>123</div></div>
          <ul className='DrawerItems'>
            <li>A</li>
            <li>B</li>
          </ul>
        </div>
      </SwipeableDrawer>

    </>
  );
}

export default Layout;
