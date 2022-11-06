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
import Pagination from '@mui/material/Pagination';

export default function Products() {

  const [currentProducts, setCurrentProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const limit = 12;
  let count = 0;

  const fetchData = async (pageNumber) => {
    try {
      let skip = (pageNumber - 1) * limit;
      let response = await getProducts({ limit: limit, skip: skip, select: 'title,category,description' });
      if (response.status === 200) {
        setTotalPages(Math.ceil(response.data.total / limit));
        let products = response.data.products;
        setCurrentProducts(products);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (count == 0) {
      fetchData(1);
      count = 1;
    }
  }, []);


  const renderProducts = (pageNumber) => {
    console.log(pageNumber);
    fetchData(pageNumber);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
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
                          {element.category + " "}
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
      <Pagination count={totalPages} color="primary" sx={{ marginTop: "10px" }} onChange={e => renderProducts(e.target.textContent)} />
    </div>
  );
}
