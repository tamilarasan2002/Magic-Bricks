import React, { useEffect, useState } from "react";
import { Grid } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './filterHead.scss'
import { useDispatch, useSelector } from "react-redux";
import { setminmax,setflatBHK,setResident } from "../Store/Reducer";
const Filterhead=()=>{
    const dispatch=useDispatch();
    const state= useSelector((eve)=>eve.Bricks.budget);
    const residentFlat= useSelector((eve)=>eve.Bricks.resident)
    const flatBHK= useSelector((eve)=>eve.Bricks.flatBHK)
    const [priceShow,setpriceShow]=useState(false);
    const [BHKShow,setBHKShow]=useState(false);
    const [minShow,setminShow]=useState(true);
    const [maxShow,setmaxShow]=useState(false);
    const [flatShow,setflatShow]=useState(false);
    const [spanText,setspanText]=useState('Budget')
    const displayBHK=['1','2','3','4','5','6']
    const displayFalt=['Flat','House/Villa','Plot']
    const minprice=["500000","1000000","2000000","3000000","4000000","5000000","6000000","7000000","8000000","9000000","10000000"]
    var inputmin = state.minPrice;
    var inputmax=state.maxPrice;
    const handelMaxPrice = (element)=>{
        // console.log(element,state)
        dispatch(setminmax({key:"maxPrice",value:element}));
        setspanText(` ₹ ${state.minPrice/100000}-Lacs-${element/100000}.... `  )
        setminShow(true);
        setmaxShow(false);
        setpriceShow(false)
    }
    const handelMinPrice=(element)=>{
        // console.log(element,state)
        dispatch(setminmax({key:"minPrice",value:element}))
        setminShow(false);
        setmaxShow(true);
        setspanText(` ₹ Greater then ${element/100000}L.... `  )
        setpriceShow(true)
    }

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
            <Grid item onClick={()=>{setpriceShow(!priceShow);setBHKShow(false);setflatShow(false)}} className='filter-options budget-fillter'>
                <span >{spanText}</span>
                <ExpandMoreIcon />
                <Grid>
                { priceShow ? 
                            <Grid container className='drop-price'>
                                <Grid item xs={12} className='min-max-inputs' >
                                    <input onChange={()=>{}} type={"text"} placeholder={'Min Price'}  value={inputmin==="0"? '' : inputmin} ></input> to 
                                    <input onChange={()=>{}} type={"text"} placeholder={'Max Price'} value={inputmax==='100000000' ? '' : inputmax }></input>
                                </Grid>
                                <Grid item xs={12} className='min-max-container' >
                                    <Grid item xs={6} >
                                        { minShow ? 
                                            <Grid item xs={12} className='min-price-container' >
                                                <span className='min-price'  onClick={()=>{dispatch(setminmax({key:"minPrice",value:'0'}));setminShow(false);setmaxShow(true)}} value={500000}>Min</span>
                                                {[...minprice].map((element,index)=>{
                                                    return( 
                                                        <span 
                                                        key={index} 
                                                            className='min-price' 
                                                            onClick={()=>{handelMinPrice(element)}} 
                                                            value={500000}>
                                                                ₹  {(element/100000)!==100 ? `${element/100000}Lac`  : `${element/100000/100 } Crs`} 
                                                            </span>
                                                        )
                                                    })
                                                }
                                            </Grid> 
                                            : null
                                        }
                                    </Grid>
                                    <Grid item xs={6} >
                                        { maxShow ?
                                            <Grid item xs={12} className='min-price-container'>
                                                <span className='min-price'  
                                                    onClick={()=>{
                                                        dispatch(setminmax({key:"maxPrice",value:'100000000'}));
                                                        setpriceShow(false);
                                                        setminShow(true);
                                                        }} 
                                                    value={500000}
                                                >
                                                        Max
                                                </span>
                                                {[...minprice].filter((element,index)=>{
                                                    return Number(element) > Number(state.minPrice)
                                                }).map((element,index)=>{
                                                    return (
                                                        <span 
                                                            key={index} 
                                                            className='min-price' 
                                                            onClick={()=>{handelMaxPrice(element);}}
                                                            value={500000}
                                                        >
                                                            ₹  {(element/100000)!==100 ? `${element/100000}Lac`  : `${element/100000/100 } Crs`}
                                                        </span>
                                                    )  
                                                })}
                                            </Grid> 
                                            : null
                                        }
                                    </Grid>      
                                </Grid>
                            </Grid>
                            : null
                        }
                </Grid>
            </Grid>
            <Grid item className='filter-options filter-falt' onClick={()=>{setflatShow(!flatShow);setBHKShow(false);setpriceShow(false)}}>
                <span >Property Type</span>
                <ExpandMoreIcon />
                { flatShow ? 
                    <Grid item={12} className='search-drapdown-falt' >
                    {[...displayFalt].map((ele,index)=>{                            
                        return (
                        <span 
                            key={index} 
                            onClick={()=>{
                                dispatch(setResident({key:index,value:!residentFlat[index].checker,residentValue:displayFalt[index]}))}}
                                style={residentFlat[index].checker ? {
                                background: '#fbe9e9',
                                color: '#303030',
                                fontWeight:'600',
                                borderColor:'#fbe9e9'
                            }
                            :{}} 
                            className='property'>{ele}
                        </span>)
                    })
                    }
                    </Grid>: null
                    }
            </Grid>
            <Grid item onClick={()=>{setBHKShow(!BHKShow);setpriceShow(false);setflatShow(false)}}  className='filter-options filter-bhk'>
                <span >BHK </span>
                <ExpandMoreIcon />
                {  BHKShow ? 
                    <Grid item={12} className='search-drapdown-falt' >
                        {[...displayBHK].map((ele,index)=>{
                            return (
                                <span 
                                    key={index}
                                    onClick={()=>{
                                    dispatch(setflatBHK({key:index,value:!flatBHK[index].checker,BHKValue:ele}))}} 
                                    className='property'
                                    style={flatBHK[index].checker ? {
                                    background: '#fbe9e9',
                                    color: '#303030',
                                    fontWeight:'600',
                                    borderColor:'#fbe9e9'
                                    }:{}}>{ele} BHK
                                </span>
                            )
                        })
                        }
                        </Grid> : null
                }
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