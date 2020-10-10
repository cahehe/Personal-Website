import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
  render(){
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col = {12}>
            <img
              src = 'https://i.imgur.com/yzVSYrS.jpg'
              alt = 'avatar'
              className = 'avatar-img'
            />
            <div className = 'banner-text'>
              <h1 style = {{textAlign: "center"}}>Full Stack Web Developer</h1>

                  <hr/>

                  <p>React |  Python | Javascript</p>

                  <div className = "social-links">

                    {/*Linkedin*/}
                    {/* rel attribute is a security measure when target=_blank is used */}
                    <a href = "https://www.linkedin.com/in/carloshehe/" target = "_blank" rel = "noopener noreferrer">
                      <i className = "fa fa-linkedin-square" aria-hidden="true"/>
                    </a>

                    {/*Github*/}
                    <a href = "https://github.com/cahehe/" target = "_blank" rel = "noopener noreferrer">
                      <i className = "fa fa-github-square" aria-hidden="true"/>
                    </a>

                  </div>
              </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing
