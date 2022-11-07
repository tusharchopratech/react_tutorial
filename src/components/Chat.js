import * as React from 'react';
import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { getProducts } from '../rest/ProductsAPI';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

export default function Chat() {

    const [currentProducts, setCurrentProducts] = useState([]);

    const limit = 18;
    let count = 0;

    const fetchData = async () => {
        try {
            let skip = currentProducts.length;
            let response = await getProducts({ limit: limit, skip: skip, select: 'id,title,category,description' });
            if (response.status === 200) {
                let products = response.data.products;
                console.log(products);
                if (currentProducts.length > 0) {
                    let tmp = currentProducts;
                    tmp = tmp.concat(products);
                    setCurrentProducts(tmp);
                } else {
                    setCurrentProducts(products);
                }
            }
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (count == 0) {
            fetchData();
            count = 1;
        }
    }, []);

    const loadMoreItems = async (event) => {
        const bottom = event.target.scrollHeight - event.target.scrollTop;

        if (Math.abs(event.target.clientHeight - bottom) < 1) {
            console.log("End position of List");
            fetchData();
        }
        // console.log("Client Height : " + event.target.clientHeight + " | Scroll Height : " + event.target.scrollHeight + " | Scroll Top : " + event.target.scrollTop);
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh',
            flexDirection: 'column'
        }}>
            <div style={{
                alignItems: 'flex-start',
                width: '100%',
                overflowY: 'scroll'
            }} onScroll={e => loadMoreItems(e)}>
                <List sx={{ width: '100%' }} onScroll={e => loadMoreItems(e)}>
                    {
                        currentProducts.map(
                            function (element, i) {
                                return <div>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={element.title}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {element.id + " " + element.category + " "}
                                                    </Typography>
                                                    {element.description}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </div>
                            }
                        )
                    }
                </List>
            </div>
            <div style={{
                flex: '1',
                width: '100%',
                display: 'flex',
                flexDirection: 'row'
            }} >
                <div style={{
                    flex: '1',
                    margin: '10px',
                    paddingTop: '10px'
                }}>
                    <TextField id="outlined-multiline-flexible" label="Message" fullWidth multiline maxRows={2} />
                </div>
                <div style={{
                    display: 'flex',
                    margin: '10px'
                }}>
                    <Button variant="contained" sx={{ borderRadius: '100px' }} endIcon={<SendIcon />}>
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}
