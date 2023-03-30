import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Subheader from '../Header/Subheader'
import Seachbar from '../main-contant/Seachbar'
import StaticCard from '../main-contant/staticCard.js'
import {Provider} from 'react-redux'
import Store from '../Store/Store'
import Newproject from '../Newproject/Newproject'
import {Api} from './Api'
import Explore from '../ExploreStatic/Explore'
import { Footer } from '../Footer/Footer'
import Filterhead from '../Header/filterHead'
import FillterData from '../FillterData/FillterData'
import Unicdata from '../Unicdata/Unicdata'

const Routing = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
      <Api/>
      <Header />
        <Routes>
            <Route path='/' element={ 
              <>
                <Subheader/>
                <Seachbar/>
                <StaticCard />
                <Newproject/>
                <Explore/>
              </>
            }>
            </Route>
            <Route path='/next' element={
              <>
                <Filterhead />
                <FillterData />
              </>
              }>
              </Route>
              <Route path='/unicdata/:id' element={
                <>
                  <Unicdata />
                </>
              }>

              </Route>
          </Routes>

          <Footer/>
      </BrowserRouter>
    </Provider>
  )
}

export default Routing