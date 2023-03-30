import { Grid } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Header.scss'
import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((res)=>res.Bricks.curentPage)
  console.log(state)
  return (
    <Grid container className='header-container' style={state!=='/'? { background:'#fff' } : null }>
        <Grid item xs={6} >
          <Grid container className='left-contaniner'>
          <Grid item xs={4}>
            <a className='left-link' href={'https://www.magicbricks.com/'}> magicbricks </a>
          </Grid>
          <Grid item xs={2}>
            <a className='left-location' href={'https://www.magicbricks.com/'}>Chennai <ExpandMoreIcon/></a>
          </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
        <Grid container className='right-contaniner'>
          <Grid item xs={2}>
            <a className='right-prime' href={'https://www.magicbricks.com/'}> MB Prime <ExpandMoreIcon/></a>
          </Grid>
          <Grid item xs={2}>
            <a className='right-login' href={'https://www.magicbricks.com/'}>Login <ExpandMoreIcon/></a>
          </Grid>
          <Grid item xs={4}>
            <a className='right-post' href={'https://www.magicbricks.com/'}>Post Property <span>Free</span></a>
          </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default Header