import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
  render(){
    return(
      <div className = "contact-body ">
        <Grid className = "contact-grid">
          <Cell col = {6}>
            <h2>Carlos He He</h2>
            <img 
              src = 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/52764677_10157102469344222_3223153495704076288_o.jpg?_nc_cat=100&_nc_ohc=wnP-acNd5vEAQnjIhdX17HczHK6rqC-quypBWFxs1u_hrWAwTCk-4HfwQ&_nc_ht=scontent-lax3-1.xx&oh=035050ddd683cf26ff9ca94b458b91fc&oe=5EA06E66'
              alt = "avatar"
              style = {{height: "250px"}}
            />

            <p style = {{width: "75%", margin: "auto", paddingTop: "1em"}}>
              Feel free to contact me for any inquiries or if you simply want to talk about technology!
              I'm always open to meeting new people.
            </p>
          </Cell>
          <Cell col = {6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className = "contact-list">
              <List>
                <ListItem>
                  <ListItemContent style = {{fontSize: '30 px', fontFamily: 'Anton'}}>
                    <i className = "fa fa-phone-square" aria-hidden = 'true'/>
                      (646)-546-7506                    
                  </ListItemContent>
                </ListItem>                

                <ListItem>
                  <ListItemContent style = {{fontSize: '30 px', fontFamily: 'Anton'}}>
                    <i className = "fa fa-envelope" aria-hidden = 'true'/>
                      carlos.hehe@wsu.edu                    
                  </ListItemContent>
                </ListItem>                

              </List>
            </div>
             
          </Cell>                     
        </Grid>        
      </div>
    )
  }
}

export default Contact
