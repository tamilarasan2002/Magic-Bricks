import React, { useEffect } from "react";
import { Grid } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './filterHead.scss'
import { useDispatch } from "react-redux";
import { setCurentPage } from "../Store/Reducer";

const Filterhead=()=>{
    const dispatch=useDispatch()
    useEffect(()=>{
            dispatch(setCurentPage('/'))
    })
    return(
        <Grid container className="filter-sub-head" >
            <Grid item className="filter-options" >
                <span className='filter-row' href='https://#'>Buy <ExpandMoreIcon/></span>
                <span className='search-loction'>Chennai</span>
                <input  placeholder="Add more..." />
            </Grid>
            <Grid item className="filter-options" >
                <span className=''>Top Localities</span>
                <ExpandMoreIcon />
            </Grid>
            <Grid item className='filter-options'>
                <span >Budget</span>
                <ExpandMoreIcon />
            </Grid>
            <Grid item className='filter-options'>
                <span >Property Type</span>
                <ExpandMoreIcon />
            </Grid>
            <Grid item className='filter-options'>
                <span >BHK </span>
                <ExpandMoreIcon />
            </Grid>
            <Grid item className='filter-options'>
                <span >Posted by </span>
                <ExpandMoreIcon />
            </Grid>
            <Grid item className='filter-options'>
                <span >5 More Filters </span>
                <ExpandMoreIcon />
            </Grid>
        </Grid>
    )
}
export default Filterhead