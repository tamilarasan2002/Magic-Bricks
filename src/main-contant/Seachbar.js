import {  Button, Grid, Typography,  } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import './searchbar.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
// import { CheckBox } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from 'react-redux';
import { setCurentPage, setflatBHK, setminmax, setResident, } from '../Store/Reducer';
import { useNavigate } from 'react-router-dom';
const Seachbar = () => {
    const Navigate = useNavigate();
    const state= useSelector((eve)=>eve.Bricks.budget);
    const residentFlat= useSelector((eve)=>eve.Bricks.resident)
    const flatBHK= useSelector((eve)=>eve.Bricks.flatBHK)

    console.log(residentFlat,state,flatBHK)
    const dispatch=useDispatch();

    const minprice=["500000","1000000","2000000","3000000","4000000","5000000","6000000","7000000","8000000","9000000","10000000"]
    const [priceShow,setpriceShow]=useState(false);
    const [flatShow,setflatShow]=useState(false);
    const [minShow,setminShow]=useState(true);
    const [maxShow,setmaxShow]=useState(false);
    const [spanText,setspanText]=useState('Budget')
    const displayFalt=['Flat','House/Villa','Plot']
    const displayBHK=['1','2','3','4','5','6']
    const [flatState,setFlatState]=useState('Flat+1')
    
    useEffect(()=>{
        if(residentFlat[0].checker && residentFlat[1].checker && residentFlat[2].checker){
            setFlatState('Flat + 2')
        }
        else if (residentFlat[0].checker && residentFlat[1].checker){
            setFlatState('Flat + 1')
        }
        else if(residentFlat[1].checker && residentFlat[2].checker){
            setFlatState('House + 1')
        }
        else if(residentFlat[0].checker && residentFlat[2].checker){
            setFlatState('Flat + 1')
        }
        else if(residentFlat[0].checker){
            setFlatState('Flat')
        }
        else if(residentFlat[1].checker){
            setFlatState('House')
        }
        else if(residentFlat[2].checker){
            setFlatState('Plot')
        }
        else {
            setFlatState('Property Type')
        }
    },[residentFlat])

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
    }
        // console.log(state.minPrice,'minprice')
        var inputmin = state.minPrice;
        var inputmax=state.maxPrice;
        // console.log(inputmin,inputmax)
    return (
        <Grid container className='search-container'>
            <Grid item xs={9.5}>
                <Grid className='search-head '>
                    Welcome back! Let’s continue your search 
                </Grid>
                <Grid container className='search-links'>
                    <Grid item xs={.5}><a  href='https/#' >Buy</a></Grid>
                    <Grid item xs={.5}><a href='https/#' >Rent</a> </Grid>
                    <Grid item xs={.5}> <a href='https/#' >PG</a> </Grid>
                    <Grid item xs={.5}>  <a href='https/#' >Plot</a></Grid>
                    <Grid item xs={1.5}><a href='https/#' >Commerial</a></Grid>
                    <Grid item xs={2}> <a href='https/#' >Post Free Property Ad</a></Grid>
                </Grid>
                <Grid container className='Search-bar'>
                    <Grid className='search-loction-container'  item xs={4.5} >
                        <LocationOnIcon/>
                        <span className='search-loction'>Chennai <CloseIcon /></span>
                        <input  placeholder="Add more..." />
                    </Grid>
                    <Grid  item xs={2} className='search-flat'>
                       <Grid  className='search-flat-item' onClick={()=>{setpriceShow(false) ;setflatShow(!flatShow)}}>
                             <HomeIcon />
                            <span> {flatState} </span>
                            <ExpandMoreIcon className='search-icon'/>
                       </Grid>
                        { flatShow ? 
                        <Grid container className='search-drapdown'>
                            <Grid item className='search-drapdown-head'  xs={12}>
                                <Typography component="p"> Residential <ExpandMoreIcon/></Typography>
                            </Grid>
    {/* Flat and BHK search  */}
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
                            </Grid>
    {/* Price options */}
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
                            </Grid>
                            <Grid item className='search-drapdown-head'  xs={12}>
                                <Typography component="p"> Commercial <ExpandMoreIcon/></Typography>
                            </Grid>
                            <Grid item className='search-drapdown-head'  xs={12}>
                                <Typography component="p"> Other Property Types <ExpandMoreIcon/></Typography>
                            </Grid>
                        </Grid>
                        :null
                        }
                    </Grid>
                    <Grid className='search-price'  item xs={2.5} >
                        <Grid className='search-price-item' onClick={()=>{setpriceShow(!priceShow);setflatShow(false)}}>
                            <CurrencyRupeeIcon />
                            <span>{spanText}</span>
                            <ExpandMoreIcon className='search-icon'/>
                        </Grid>
                        { priceShow ? 
                            <Grid container className='drop-price'>
                                <Grid item xs={12} className='min-max-inputs' >
                                    <input onChange={()=>{}} type={"text"} placeholder={'Min Price'}  value={inputmin==="0"? '' : inputmin} ></input>
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
                    <Grid  item xs={2}>
                        <Button onClick={()=>{Navigate('/next');dispatch(setCurentPage('/filter'))}} className='search-button'><SearchIcon/> Search</Button>
                    </Grid>
                 </Grid>
            </Grid> 
        <Grid item xs={2.5}>
            <img src='https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/tvc/tvc-campaign-web-pnm.png' alt="imagr not found" />
        </Grid>
    </Grid>
  )
}
export default Seachbar