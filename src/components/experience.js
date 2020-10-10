import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component{
    render(){
        return(
            <Grid>
                <Cell col = {4}>
                    <p style = {{font: "20px bold" }}>{this.props.companyName}</p>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col = {8}>
                    <h4 style = {{marginTop:"0px", font: "1px"}}>{this.props.jobName}</h4>
                    <ul style = {{listStyle : "none"}}>
                        <li style = {{listStyleType: 'circle',color: 'white'}}>{this.props.jobDescription}</li>
                        <li style = {{listStyleType: 'circle',color: 'white'}}>{this.props.jobDescription2}</li>
                        <li style = {{listStyleType: 'circle',color: 'white'}}>{this.props.jobDescription3}</li>
                        {/* <li style = {{listStyleType: 'circle',color: 'white'}}>{this.props.jobDescription4}</li> */}
                    </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;