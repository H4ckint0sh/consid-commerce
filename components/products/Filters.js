/* eslint-disable react/prop-types */
import {
  Collapse,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import { ExpandLess, ExpandMore } from '@material-ui/icons';

const Filters = ({ openFilters, setOpenFilters }) => (
  <>
    <Hidden mdDown>
      <Grid md={3} item>
        <Filters />
      </Grid>
    </Hidden>
    <Hidden mdUp>
      <List>
        <ListItem
          button
          onClick={() => {
            setOpenFilters(!openFilters);
          }}
          divider
        >
          <ListItemText primary="Filters" />
          {openFilters ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openFilters} timeout="auto">
          <List component="div" disablePadding>
            <ListItem>
              <Filters />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Hidden>
  </>
);

export default Filters;
