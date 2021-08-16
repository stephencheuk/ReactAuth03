import {
  Link,
} from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import {
  Apps as AppsIcon
} from '@material-ui/icons';

import './styles.css';
import './Drawer.css';

import { useTranslation } from 'react-i18next';

const Layout = ({ menu, ...props }) => {

  const { t } = useTranslation();

  return (
              <List>
                {
                  menu && menu.length ? menu.map( (o, i) => {
                      return o.hide ? null :
                            (
                              <ListItem key={ o.name } className='ListItem' dense button component={Link} to={`${o.link}`}>
                                <ListItemIcon>
                                  <ListItemIcon title={t(`${o.name}`)}>
                                  {
                                    o.icon || <AppsIcon />
                                  }
                                  </ListItemIcon>
                                </ListItemIcon>
                                <ListItemText className='ListItemText' primary={t(`${o.name}`)} />
                              </ListItem>
                            )
                    }
                  ) : (<ListItem><ListItemText>NO MENU ITEM</ListItemText></ListItem>)
                }
              </List>
  );

}

export default Layout;
