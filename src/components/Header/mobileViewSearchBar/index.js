import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BiSearch } from 'react-icons/bi';

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

export default function SearchBarMobileView() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    style={{ fontWeight: "bold" }}
                    component="div"
                    id="nested-list-subheader">
                    Search Bar
                </ListSubheader>
            }
            className={classes.root}
        >
            <ListItem button onClick={handleClick} style={{ borderBottom: '0.5px solid #F3F3F3', }}>
                <div className="input-group mb-3" style={{}}>
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                    <div style={{
                        display: "flex",
                        minWidth: 50,
                        borderTopRightRadius: 4,
                        borderBottomRightRadius: 4,
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#521C87",
                        cursor: "pointer",
                        fontWeight: "bold",
                        color: "white"
                    }}>
                        <BiSearch style={{ display: "flex", color: "white", fontSize: 18, cursor: 'pointer' }} />
                    </div>
                    <div style={{ marginTop: 10 }}>Search 14.1 Million products from 130 stores in UAE</div>
                </div>
            </ListItem>

        </List>
    );
}
