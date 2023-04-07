import { Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import './Newproject.scss'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const Newproject=()=>{
    const navigate=useNavigate()
    const state = useSelector((eve)=>eve.Bricks.api)
    console.log(state)
    return(
        <Grid container className="gallary-container">
           <Grid item xs={12} className='gallary-head'>
            <Typography className="heading" variant="h5" component="h5">New Project Gallery  </Typography>
           <Grid>
            <span>See all Project</span>
            <ArrowForwardIcon/>
           </Grid>
          </Grid>
          <Grid container className="card-body">
            { [...state].map((element,index)=>{
                return(
                   (element.house_id <= 6) ? 
                    <Grid onClick={()=>navigate(`/unicdata/${element.house_id}`)} className="gallary-card" key={index} item xs= {3.8}>
                        <Grid container>
                            <Grid item xs={5}>
                                <img src={element.house_img} alt="not found"></img>
                            </Grid>
                            <Grid item xs={7} className="card-content">
                                <Typography variant="h6" component="h6">{ element.house_name }</Typography>
                                <Typography  component="p">{ element.description }</Typography>
                                <Typography  component="p">{ element.house_area }</Typography>
                                <Typography  component="p" className="space1" >{ element.flat } BKH Flat</Typography>
                                <Typography  component="p" className="space2" ><span>₹{ element.house_price } </span>Lac onwards</Typography>
                                <Typography  component="p"> Marketed by { element.marketing_company }</Typography>



                            </Grid>
                        </Grid>

                    </Grid>
                :null 
                   
                   
                )

            })
                
            }
          </Grid>
        </Grid>
    )

}
export default Newproject 