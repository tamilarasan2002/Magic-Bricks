import React,{useState} from "react";
import { Button, Grid } from "@mui/material"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import HouseSidingSharpIcon from '@mui/icons-material/HouseSidingSharp';
import AttractionsSharpIcon from '@mui/icons-material/AttractionsSharp';
import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import BathtubIcon from '@mui/icons-material/Bathtub';
import EmojiObjectsSharpIcon from '@mui/icons-material/EmojiObjectsSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import NoCrashSharpIcon from '@mui/icons-material/NoCrashSharp';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import './unicdata.scss'
import MaxWidthDialog from "./unicDialog";
const Unicdata=()=>{
    const param=useParams()
    const state=useSelector((res)=>res.Bricks.api)
    console.log(param);
    return(
        <Grid className="unic-page">
        {[...state].filter((element,index)=>{
            return element.house_id === param.id
        }).map((ele,index)=>{
            return(
                <Grid className="unic-details" key={index}>
                <Grid className="unic-container" >
                    <Grid className="unic-head">
                        <p className="head-title"><span className="title-price">{ele.house_price} Lacs</span>Get ₹ 5013 cashback on Home Loan</p>
                        <p className="head-title">{ele.flat} BHK {ele.super_area} Sqft Flat for Sale {ele.house_area} <span className="title-location">Chennai</span> </p>
                        <FormatListBulletedSharpIcon />
                    </Grid>
                    <Grid container className='unic-contents'>
                        <Grid item xs={4} className="unic-house--img">
                            <img src={'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Feb/25/Photo_h300_w450/65691755_4_bhkbedroom21_300_450.jpg'} alt='not fount' />
                        </Grid>
                        <Grid item xs={8} className='unic-content-1' >
                            <Grid container className="unic-detail-1">
                                <Grid  item className="detail-datas"> <AirlineSeatIndividualSuiteIcon/>3 Beds </Grid>
                                <Grid  item className="detail-datas"> <BathtubIcon/>{ele.bathroom} Baths</Grid>
                                <Grid  item className="detail-datas"> <DirectionsCarFilledIcon/> {ele.car_parking} parking</Grid>
                                <Grid  item className="detail-datas"> <ChairAltIcon/>{ele.furnishing} </Grid>
                            </Grid>
                            <Grid container className="unic-detail-2">
                                <Grid item xs={4}>
                                    <p> Super Built-Up Area</p>
                                    <span>{ele.super_area}</span>
                                    <span>{Math.round(ele.house_price*100000/ele.super_area)}</span>
                                </Grid>
                                <Grid  item xs={4}>
                                    <p>Developer</p>
                                    <span>{ele.marketing_company}</span>
                                </Grid>
                                <Grid  item xs={4}>
                                    <p>Project</p>
                                    <span>{ele.owner_name}</span>
                                </Grid>
                                <Grid  item xs={4}>
                                    <p>Floor</p>
                                    <span>{ele.floor}</span>
                                </Grid>
                                <Grid  item xs={4}>
                                    <p>Transaction Type</p>
                                    <span>{ele.transaction}</span>
                                </Grid>
                                <Grid  item xs={4}>
                                    <p>Status</p>
                                    <span>{ele.status}</span>
                                </Grid>
                                <Grid  item xs={4}>
                                    <p>Project</p>
                                    <span>{ele.owner_name}</span>
                                </Grid>
                                {ele.Lift!==''?
                                    <Grid  item xs={4}>
                                    <p>Lift</p>
                                    <span>{ele.lift}</span>
                                </Grid> : null
                                }
                                <Grid  item xs={4}>
                                    <p>Furnished Status</p>
                                    <span>{ele.furnishing}</span>
                                </Grid>
                                {ele.car_parking!=='' ? 
                                    <Grid  item xs={4}>
                                        <p>Car Parking</p>
                                        <span>{ele.car_parking}</span>
                                    </Grid>: null
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className="Unic-offer"><p><span>OFFER</span> 40th Anniversary offer . Save up {Math.round(ele.house_price/8) }Lakhs</p></Grid>
                    <Grid container className="Unic-buttons"> 
                        <Grid item>
                            <MaxWidthDialog />
                            <Button onClick={()=>{}} className='contact-button-2'> Book Site Visit</Button>
                        </Grid>
                        <Grid item>
                            <Grid container className="last-seen">
                                <PermIdentityIcon/>
                                <p>Last contact made 5 days ago</p>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Buyproject/>
                <Grid className="more-detail">
                    <h1>More Details</h1>
                    <Grid className="more-content">
                        <Grid container>
                            <span className="more-label">Price Breakup</span>
                            <span className="more-answer">₹ {ele.house_price} Lac</span>
                        </Grid>
                        <Grid container>
                            <span className="more-label">Booking Amount</span>
                            <span className="more-answer">₹ 1.0Lac</span>
                        </Grid>
                        <Grid container>
                            <span className="more-label">RERA ID</span>
                            <span className="more-answer">{ele.rera_id}</span>
                        </Grid>
                        <Grid container>
                            <span className="more-label">Address</span>
                            <span className="more-answer">{ele.house_address}</span>
                        </Grid>
                        <Grid container>
                            <span className="more-label">Furnishing</span>
                            <span className="more-answer">{ele.furnishing}</span>
                        </Grid>
                        <Grid container>
                            <span className="more-label">Flooring</span>
                            <span className="more-answer">{ele.flooring}</span>
                        </Grid>
                        <Grid container>
                            <span className="more-label">Water water_availability</span>
                            <span className="more-answer">{ele.water_availability}</span>
                        </Grid>
                    </Grid>
                    <Grid container className="view-more"> View all Details <ExpandMoreIcon/> </Grid>
                    <p className="view-discrpt">
                        <span className="discript-head">Description : </span>
                            Multistorey apartment is available for sale. It is a good location property. Please contact for more details apartment is available for sale.<wbr/>
                        <span className="discript-more">Read more</span>
                    </p>
                    <Grid>
                        <Button onClick={()=>{}} className='contact-button-1'>Contact Builder</Button>
                    </Grid>
                </Grid>
                <Amenities/>
                <p className="view-discrpt">
                    <span className="discript-head">Disclaimer : </span>
                        Multistorey apartment is available for sale. It is a good location property. Please contact for more details apartment is available for sale.<wbr/>
                    <span className="discript-more">Read more</span>
                </p>
                </Grid>
                
            )
        })}
        <Regiterform/>
    </Grid> 
    
    )
}
export default Unicdata


const Buyproject= ()=>{
    return(
        <Grid  className="buy-container">
            <h1>Why buy in this project</h1>
            <ul>
                <li> C.C.No EC/Central-161/2020</li>
                <li>Ideal envirinment for people to live to walk to Grow</li>
                <li>Designed to delight every first home buyer</li>
            </ul>
            <span>+81 more</span>
        </Grid>
    )
}

const Amenities = () => {
    const details=[
        {icon:<EmojiObjectsSharpIcon/>,text:'Power Back Up'},
        {icon:<ThunderstormIcon/>,text:'Rain Water Harvesting'},
        {icon:<HouseSidingSharpIcon />,text:'Club House'},
        {icon:<AttractionsSharpIcon/>,text:'Park'},
        {icon:<NoCrashSharpIcon/>,text:'Reaerved Parking'},
        {icon:<AdminPanelSettingsSharpIcon />,text:'Security'}
    ]
    return(
        <Grid className="amenities">
            <h1>Amenities</h1>
            <Grid container className="amenities-container">
                {[...details].map((ele,index)=>{
                   return<Grid container item xs={4} key={index} className="amenities-elements">
                        {ele.icon}
                        <span>{ele.text}</span>
                    </Grid>
                })

                }
            </Grid>
            <Grid container className="view-more"> View all Details <ExpandMoreIcon/> </Grid>
        </Grid>
    )
}
export const Regiterform = () =>{
    const [userName,setusername]=useState('')
    const [userEmail,setEmail]=useState('')
    const [formvalid,setformvalid]=useState(false)
    const [userNumber,setNumber]=useState('')
    const [call,callMe]=useState(false)

    const handelForm =()=>{
        setformvalid(true);
        if(userName!=='' && userNumber!=='' && userEmail!==''){
            callMe(true)
        }
    }
    return(
        <Grid className="unic-form">
            <Grid className="form-head">
                <h1>Contact Builder </h1>
                <h1>Doshi Housung Team</h1>
            </Grid>
            <Grid className="form-head">
                <input type={'text'} placeholder='YOUR NAME' onChange={(even)=>{
                    setusername(even.target.value);
                }}/>
                {formvalid ? (userName=== "" ? <p className="error">Please Enter your user name</p> :null) :null}
                <input type={'Email'} placeholder='Email' onChange={(even)=>{
                    setEmail(even.target.value);
                }}/>
                {formvalid ? (userEmail=== "" ? <p className="error" >Please Enter your user Email </p>:null) :null}
                <Grid className="form-select">
                    <select>
                        <option>IND +91</option>
                        <option>USA +0</option>
                        <option>UK +72</option>
                        <option>NES +44</option>
                    </select>
                    <input type={'number'} placeholder='Moblie Number' required maxlength={10} onChange={(even)=>{
                        setNumber(even.target.value);
                }}/>
                    {formvalid ? (userNumber=== "" ? <p className="error">Please Enter Moblie Number</p>:null) :null}
                    
                </Grid>
                <p className="form-text">I Agree to MagicBricks <span>Terms of use</span></p>
                <Button onClick={()=>{handelForm()}} className='contact-button-1'>Get Contact Details</Button>
                {call?
                        <Grid className="call-me">
                            <a href="http//#"><Grid><PhoneIcon /></Grid></a>
                            <a href="http//#"><Grid><WhatsAppIcon /></Grid></a>
                            <a href="http//#"><Grid><EmailIcon /></Grid></a>
                        </Grid>:null}
            </Grid>
            <Grid className="form-head">
                <p className="form-download"><InsertDriveFileIcon/>Download Brochure</p>
            </Grid>
        </Grid>
    )
}