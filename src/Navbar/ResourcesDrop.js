import React from 'react'
import {Button,Menu,MenuItem} from '@mui/material'
const ResourcesDrop = () => {
    const [resAnchorEl, setResAnchorEl] = React.useState(null);
    const resourcesOpen = Boolean(resAnchorEl);
    const handleResourcesClick = (event) => {
        setResAnchorEl(event.currentTarget);
    };
    const handleResourcesClose = (e) => {
        if (e.currentTarget.localName !== "ul") {
            const menu = document.getElementById("resources-menu").children[2];
            console.log(document.getElementById("resources-menu").children)
            const menuBoundary = {
                left: menu.offsetLeft,
                top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
                right: menu.offsetLeft + menu.offsetHeight,
                bottom: menu.offsetTop + menu.offsetHeight
            };
            if (
                e.clientX >= menuBoundary.left &&
                e.clientX <= menuBoundary.right &&
                e.clientY <= menuBoundary.bottom &&
                e.clientY >= menuBoundary.top
            ) {
                return;
            }
        }

        setResAnchorEl(null);
    };
    return (
        <>
            <Button
                id="resources-button"
                aria-controls={resourcesOpen ? 'resources-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={resourcesOpen ? 'true' : undefined}
                onMouseOver={handleResourcesClick}
                style={{ zIndex: 1301 }}
            >
                Resources
            </Button>
            <Menu
                id="resources-menu"
                anchorEl={resAnchorEl}
                open={resourcesOpen}
                onClose={handleResourcesClose}
                MenuListProps={{
                    onMouseLeave: (e) => handleResourcesClose(e)
                }}
            >
                <MenuItem onClick={handleResourcesClose}>Blog</MenuItem>
            </Menu>
        </>
    )
}

export default ResourcesDrop