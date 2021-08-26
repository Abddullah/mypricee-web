import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { AiOutlineUser } from 'react-icons/ai';
import { RiMenuUnfoldLine } from 'react-icons/ri';
import { GiWorld } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function NestedList() {
    const classes = useStyles();
    const [categories, setCatogeries] = React.useState(false);
    const handleClickCategories = () => { setCatogeries(!categories) };
    const [open, setOpen] = React.useState(false);
    const handleClick = () => { setOpen(!open); };

    return (
        <div>
            {categories ?
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <div style={{ display: "flex", flex: 1, flexDirection: "row", }}>

                            <ListSubheader style={{ display: "flex", flex: 3, fontWeight: "bold", }}
                                component="div"
                                id="nested-list-subheader">
                                All Categories
                            </ListSubheader>

                            <ListSubheader onClick={handleClickCategories} style={{ display: "flex", flex: 0.2, fontWeight: "bold", }}
                                component="div"
                                id="nested-list-subheader">
                                X
                            </ListSubheader>
                        </div>
                    }
                    className={classes.root}
                >
                    <ListItem button
                        onClick={handleClick}
                        style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                        <ListItemText primary="Mobiles, Tablets & Wearables" />
                        {open ?
                            <IoIosArrowDown style={{ display: "flex", color: "black", fontSize: 18, cursor: 'pointer' }} />
                            : <IoIosArrowForward style={{ display: "flex", color: "black", fontSize: 18, cursor: 'pointer' }} />
                        }
                    </ListItem>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <>
                                <ListItem button className={classes.nested} style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                                    <ListItemText primary="Mobile Phones" />
                                </ListItem>
                                <ListItem button className={classes.nested} style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                                    <ListItemText primary="Tablets & EReaders" />
                                </ListItem>
                                <ListItem button className={classes.nested} style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                                    <ListItemText primary="Mobile & Tablets Accessories" />
                                </ListItem>
                                <ListItem button className={classes.nested} style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                                    <ListItemText primary="Wearables" />
                                </ListItem>
                            </>
                        </List>
                    </Collapse>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }} >
                        <ListItemText primary="Computers" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }} >
                        <ListItemText primary="Video Games & Consoles" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }} >
                        <ListItemText primary="Audio" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                        <ListItemText primary="Office Supplies" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                        <ListItemText primary="Home Appliances" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }} >
                        <ListItemText primary="Personal Care & Beauty" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                        <ListItemText primary="Car Parts & Accessories" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }} >
                        <ListItemText primary="Men Fashion" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                        <ListItemText primary="Women Fashion" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }} >
                        <ListItemText primary="Books" />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                        <ListItemText primary="Sports Equipment" />
                    </ListItem>

                </List>
                :
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader style={{ fontWeight: "bold" }}
                            component="div"
                            id="nested-list-subheader">
                            Menu
                        </ListSubheader>
                    }
                    className={classes.root}
                >
                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', justifyContent: "center", alignItems: "center" }} >
                        <AiOutlineUser style={{ display: "flex", fontWeight: "bold", color: "#262626", fontSize: 20, cursor: 'pointer' }} />
                        <ListItemText primary="Login / Register" style={{ color: "#262626", fontSize: 20, marginTop: 7, marginLeft: 10 }} />
                    </ListItem>

                    <ListItem button onClick={handleClickCategories} style={{ borderBottom: '0.5px solid #F3F3F3', justifyContent: "center", alignItems: "center" }} >
                        <RiMenuUnfoldLine style={{ display: "flex", fontWeight: "bold", color: "#262626", fontSize: 20, cursor: 'pointer' }} />
                        <ListItemText primary="Shop Categories" style={{ color: "#262626", fontSize: 20, marginTop: 7, marginLeft: 10 }} />
                    </ListItem>

                    <ListItem button style={{ borderBottom: '0.5px solid #F3F3F3', justifyContent: "center", alignItems: "center" }} >
                        <GiWorld style={{ display: "flex", fontWeight: "bold", color: "#262626", fontSize: 20, cursor: 'pointer' }} />
                        <ListItemText primary="Language" style={{ color: "#262626", fontSize: 20, marginTop: 7, marginLeft: 10 }} />
                    </ListItem>
                </List >
            }

        </div>
    );
}
