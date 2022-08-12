import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link'

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

        minWidth: '200px',
        boxShadow: '0px 0px 10px #cccccc',
        '& .MuiMenu-list': {
            padding: '4px 0',

        },
        '& .MuiMenuItem-root': {
            fontWeight: 600,
            fontSize: '14px',
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

    const products = [
        {
            text: 'AutoML Prediction - Make effective business decisions',
            link: '/prediction'
        },
        {
            text: 'AutoML Classification',
            link: '/classification'
        },
        {
            text: 'AutoML Clustering - Gain deep insights about your customers',
            link: '/clustering'
        },
        {
            text: 'Why Ample AI',
            link: '/#'
        },
        {
            text: 'How it works',
            link: '/#'
        },
    ];


    const resourcesOpen = Boolean(resAnchorEl);
    const handleResourcesClick = (event) => {
        setAnchorEl(null);
        setResAnchorEl(event.currentTarget);
    };
    const handleResourcesClose = (e) => {
        if (e.currentTarget.localName !== "ul") {
            const menu = document.getElementById("resources-menu").children[2];

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
                sx={{ fontSize: '14px', color: "#000", fontWeight: "600", mr: 5 }}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Products
            </Button>
            <StyledMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    onMouseLeave: (e) => handleClose(e),
                    sx: {
                        width: 230,
                        '& .MuiMenuItem-root': {
                            whiteSpace: 'normal',
                        },
                    },
                }}
            >
                {
                    products.map(prod => (
                        <Link href={prod.link} style={{textDecoration:'none'}}>
                            <MenuItem key={prod.text} disableRipple onClick={handleClose}>
                                {prod.text}
                            </MenuItem>
                        </Link>
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
                sx={{ fontSize: '14px', color: "#000", fontWeight: "600" }}
                endIcon={<KeyboardArrowDownIcon />}
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