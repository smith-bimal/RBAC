// EditDrawer.js
import Drawer from '@mui/material/Drawer';
import { Fragment } from 'react';

/* eslint-disable react/prop-types */
const EditDrawer = ({ open, toggleDrawer, children }) => {
    return (
        <Fragment>
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
            >
                {children}
            </Drawer>
        </Fragment>
    );
};

export default EditDrawer;
