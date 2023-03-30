import { Button, Grid, Typography } from "@mui/material"
import React, {  } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCurentPage } from "../Store/Reducer"
import './filterData.scss'
const FillterData=()=>{
    const Navigate=useNavigate();
    const dispatch=useDispatch();
    const ApiState = useSelector((res)=>res.Bricks.api)
    const BudgetState = useSelector((res)=>res.Bricks.budget)
    const ResidentState=useSelector((res)=>res.Bricks.resident)
    const FlatBHKState=useSelector((res)=>res.Bricks.flatBHK)
    // const [displayData,setdisplayData]=useState([]); 
    // console.log(ApiState,BudgetState,ResidentState,)
    console.log(FlatBHKState);
    const handelFilter= ()=>{
        var filteredData=[...ApiState].filter((element1)=>{
            // console.log(BudgetState.minPrice,Number(element1['house_price'])*100000 ,Number(BudgetState.maxPrice));
            return Number(BudgetState.minPrice) <=  Number(element1['house_price'])*100000 && Number(element1['house_price'])*100000 <= Number(BudgetState.maxPrice)
        }).filter((element)=>{
            var returnchecker=[...FlatBHKState].every((value)=>value.BHK==='');
            // console.log(FlatBHKState);
            // console.log(element.flat,index);
            [...FlatBHKState].forEach((ele)=>{
                // console.log(ele.BHK)
                if (element.flat === ele.BHK){
                    returnchecker=true
                }
            })
            return returnchecker
        }).filter((element)=>{
            var returnchecker=[...ResidentState].every((value)=>value.resident==='');
            [...ResidentState].forEach((ele)=>{
                // console.log(element.resident,ele.resident)
                if(element.resident===ele.resident){
                    returnchecker=true
                }
            })
            return returnchecker
        })
        console.log(filteredData);
        return filteredData
    }
    const filteredData = handelFilter()
    return(
        <Grid className='filter-container'>
            <Grid className='filter-content'>
                <Typography className="   " component={'h2'}>{filteredData.length} results | Residential Properties for Sale in Chennai</Typography>
                {[...filteredData].map((ele,ind)=>{
                    return(
                        <Grid key={ind} container className="filter-elements">
                            <Grid item xs={2} className='house-img-container' >
                                <Grid className='house-img'>
                                    <img src={ele.house_img} alt='image not found'/>
                                </Grid>
                                <Typography component={'p'} className='filter-owner' >Owner : {ele.owner_name}</Typography>
                            </Grid>
                            <Grid item xs={8} className='filter-Detail'>
                                <Typography className="filter-label" component={'span'}>Only on magicbricks</Typography>
                                <Typography component={'h6'}>{ele.house_address}</Typography>
                                <Typography component={'a'}>{ele.house_area}</Typography>
                                <Grid container className="filter-details-container" >
                                    <Grid item xs={4} className='filter-item'>
                                        <span>SUPER AREA</span>
                                        <Typography component={'p'}>{ele.super_area}sqft</Typography>
                                    </Grid>
                                    <Grid item xs={4} className='filter-item'>
                                        <span>UNDER CONSTRUCTION</span>
                                        <Typography component={'p'}>Poss. by {ele.under_construction}</Typography>
                                    </Grid>
                                    <Grid item xs={4} className='filter-item'>
                                        <span>TRANSACTION</span>
                                        <Typography component={'p'}>{ele.transaction}</Typography>
                                    </Grid>
                                    { ele.car_parking  !=='' ?
                                    <Grid item xs={4} className='filter-item'>
                                        <span>CAR PARKING</span>
                                        <Typography component={'p'}>{ele.car_parking} </Typography>
                                    </Grid>
                                    : null 
                                    }
                                <Grid item xs={4} className='filter-item'>
                                        <span>BATHROOM</span>
                                        <Typography component={'p'}>{ele.bathroom} </Typography>
                                    </Grid>
                                    <Grid item xs={4} className='filter-item'>
                                        <span>FURNISHING</span>
                                        <Typography component={'p'}>{ele.furnishing} </Typography>
                                    </Grid>
                                </Grid>  
                                <Grid item xs={12}>
                                        <span>Welcome to thoughtfully designed Super Smart Homes. Control your home at the click of a button. Yes! Every home at Navin's Starwood Towers.</span>
                                </Grid>
                            </Grid>
                            <Grid item xs={2} className='view-button'>
                                    <Grid item xs={12}  >
                                        <Typography  component={'p'}>₹{ele.house_price} Lacs</Typography>
                                        <Typography component={'span'}>₹{Math.round(ele.house_price*100000/ele.super_area)} ser sqft</Typography>
                                        <Button onClick={()=>{Navigate(`/unicdata/${ele.house_id}`);dispatch(setCurentPage('/'))}} className=''>View Details</Button>
                                    </Grid>
                                </Grid>
                            
                        </Grid>
                    )
                })
                }
            </Grid>
        </Grid>
    )
}
export default FillterData 