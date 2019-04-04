import React,{Component} from 'react'
import {MDBNavbar,MDBNavbarBrand,MDBContainer,MDBCol,MDBIcon} from 'mdbreact'
import youtube from '../../images/youtube.png'
import './Navbar.css';

class Navbar extends Component{

    render(){
        return(
            <MDBContainer fluid>

            <MDBNavbar>
                {/* Navbar container */}
                <MDBContainer fluid>
                   
                        {/* Brand column */}
                        <MDBCol md="2" className="header-menu-section">
                            {/* Navbar Brand */}
                            <MDBIcon icon="bars" className="menu-bar" />

                            <MDBNavbarBrand className="navbarbrand">
                                <a href="" title="Youtube Home"> <img src={youtube} className='Youtube-logo' alt="Logo"/> Youtube<sup>GH</sup></a>           
                            </MDBNavbarBrand>
                        </MDBCol>

                        {/* Search bar column */}
                        <MDBCol md="8" className="search-action-section">
                            <div className="search-form">
                                <input type="text" placeholder="Search"/>
                                <MDBIcon icon="search" className="searchIcon" />
                            </div>
                        </MDBCol>

                        {/* Icons column */}
                        <MDBCol md="2" className="right-action-section">
                            
                            <MDBIcon icon="video" className="right-icon" />
                            <MDBIcon icon="th" className="right-icon" />
                            <MDBIcon icon="comment" className="right-icon" />
                            <MDBIcon icon="bell" className="right-icon" />
                        </MDBCol>
                    
                </MDBContainer>

            </MDBNavbar>


            </MDBContainer>
        )
    }
}

export default Navbar