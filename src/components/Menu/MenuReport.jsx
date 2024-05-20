import { IconButton, Menu, MenuItem } from '@mui/material';
import { BsThreeDots } from 'react-icons/bs';
import React from 'react'

const MenuReport = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <BsThreeDots />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    <div>Share</div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div>Save</div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div>Report</div>
                </MenuItem>
            </Menu>
        </>
    )
}

export default MenuReport