import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
  render(){
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col = {12}>
            <img
              src = 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/69236045_10157557289179222_2992100129378402304_o.jpg?_nc_cat=104&_nc_ohc=r5a_niGyG9wAQmpq34hAb463_-8N5lrucbr1SPE0yXXJt9dulrol4M5bQ&_nc_ht=scontent-lax3-1.xx&oh=9f97736417483e667d96bf11f5db8188&oe=5E9984F5'
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
