import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{

  constructor(){
    super()
    this.state = ({
      empirical3: 123
    })
  }

  render(){
    return(
      <div>
        <Grid>
          <Cell col = {4}>
            <div style = {{textAlign: "center"}}>
              <img
                src = "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/48362990_100283491029651_6827803278177206272_o.jpg?_nc_cat=111&_nc_ohc=aPFSvnmloHAAQlG06mDarkkkIlY-6QfS0XO127smSvSeTGYJrmEgxsfdQ&_nc_ht=scontent-lax3-2.xx&oh=608e958121a368124dc52571db0a3c6b&oe=5EAD15B8"
                alt = "avatar"
                style = {{height: "200px", }}
              />
            </div>

            <h2 style ={{paddingTop: "2em"}}>Carlos He He</h2>
            {/* <h4 style = {{color: "grey"}}>Programmer</h4> */}
            <hr style = {{borderTop: "2.5px solid #FF7F50", width: "100%"}}></hr> 
            <p>Passionate student looking for an internship or entry-level position.</p>
            <hr style = {{borderTop: "2.5px solid #FF7F50", width: "100%"}}></hr> 
            <h5>Address</h5>
            <p>305 NE Spaulding Apt 2, Pullman WA 99163</p>
            <h5>Phone</h5>
            <p>(646)-546-7506</p>
            <h5>Email</h5>
            <p>carlos.hehe@wsu.edu</p>
            <h5>Web</h5>
            <a href = "carloshehe.com" target = "_blank" rel = "noopener noreferrer">carloshehe.com</a>
            {/* <hr style = {{borderTop: "3px solid #833fb2", width: "50%"}}></hr> */}

          </Cell>
          <Cell className = "resume-right-col" col = {8}>
            <h2>Education</h2>
            <Education 
              startYear = {2017}
              endYear = {2020}
              schoolName = "WSU"
              schoolDescription = "Masters of Science in Computer Science"
              />
            <Education 
              startYear = {2012}
              endYear = {2016}
              schoolName = "Queens College"
              schoolDescription = "Bachelors of Arts in Accounting"
              />
            <hr style = {{borderTop: "2px solid #FAEBD7"}}/>

            <h2>Experience</h2>

            <Experience
              companyName = "Empirical Wealth Management"
              startYear = "May 2019"
              endYear = "August 2019"
              jobName = "Technology Intern"
              // jobName = {this.state.foo}
              jobDescription = "Set up SQL databases on Microsoft Azure."              
              jobDescription2 = "Facilitated data transfer between Tamarac and Salesforce by automating the process via Python scripts and task schedulers."
              jobDescription3 = "Increased company efficiency by suggesting new software to executives."              
            />

            <Experience
              companyName = "AIG"
              startYear = {2009}
              endYear = {2012}
              jobName = "Tax Assistant"        
              jobDescription = "Prepare Forms 5471 and other related forms based on entities filling requirements using CorpTax and Taxstream during tax compliance season."
              jobDescription2 = "Contributed to corporate taxation team to update quarterly financials and discrete items"
              jobDescription3 = "Increase productivity by utilizing the capabilities of the CorpTax system to import financial statements"
              
            />

              <hr style = {{borderTop: "2px solid #FAEBD7"}}/>
              <h2>Skills</h2>

              <div className = 'skills'>
                <ul>
                  <li>JavaScript</li>
                  <li>ReactJS</li>
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>                  
                </ul>
                <ul style = {{marginLeft: '220px'}}>                  
                  <li>SQL</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>Java</li>
                </ul>
              </div>

              {/* <Skills
                skill = "ReactJS"
                progress = {45}
              />              
              <Skills
                skill = "NodeJS"
                progress = {20}
              />
              <Skills
                skill = "ExpressJS"
                progress = {25}
              />              
              <Skills
                skill = "MongoDB"
                progress = {35}
              />
              <Skills
                skill = "GraphQL"
                progress = {25}
              /> */}
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
