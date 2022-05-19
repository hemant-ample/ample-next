import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(3),
        minWidth: '200px',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            margin: "5px",
            '& .MuiSvgIcon-root': {
                marginRight: theme.spacing(1.5),
            },
            '&:hover': {
                backgroundColor: 'transparent',
                borderRadius: "5px"
            },
        },
    },
}));

const ProductsDrop = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [resAnchorEl, setResAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setResAnchorEl(null);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        if (e.currentTarget.localName !== "ul") {
            const menu = document.getElementById("basic-menu").children[2];

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

        setAnchorEl(null);
    };

    const products = ['AutoML Prediction - Make effective business decisions', 'AutoML Classification', 'AutoML Clustering - Gain deep insights about your customers', 'Why Ample AI', 'How it works'];


    const resourcesOpen = Boolean(resAnchorEl);
    const handleResourcesClick = (event) => {
        setAnchorEl(null);
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
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseOver={handleClick}
                style={{ zIndex: 1301 }}
                sx={{ fontSize: '14px',color:"#000",fontWeight:"600" }}
            >
                Products
            </Button>
            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    onMouseLeave: (e) => handleClose(e)
                }}
            >
                {
                    products.map(prod => (
                        <MenuItem disableRipple onClick={handleClose}>{prod}</MenuItem>
                    ))
                }
            </StyledMenu>

            <Button
                id="resources-button"
                aria-controls={resourcesOpen ? 'resources-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={resourcesOpen ? 'true' : undefined}
                onMouseOver={handleResourcesClick}
                style={{ zIndex: 1301 }}
                sx={{ fontSize: '14px',color:"#000",fontWeight:"600" }}
            >
                Resources
            </Button>
            <StyledMenu
                id="resources-menu"
                anchorEl={resAnchorEl}
                open={resourcesOpen}
                onClose={handleResourcesClose}
                MenuListProps={{
                    onMouseLeave: (e) => handleResourcesClose(e)
                }}
            >
                <MenuItem onClick={handleResourcesClose}>Blog</MenuItem>

            </StyledMenu>
        </>
    )
}

export default ProductsDrop