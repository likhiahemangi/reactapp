import React from 'react';
import logo from 'img/logo.jpg';
import 'css/index.css'

const Greeting = () => {
	return (
	<>
		<header className="header">
        <div>
            <i class="fas fa-arrow-circle-left"><h2> Menu</h2></i>
        </div>
        <div>
            <img src={logo} alt="logo" className="logo"/>
        </div>   
        <div>
                <i class="fas fa-search"></i>
                <i class="fas fa-cog"></i>
               <a href="profile.html" className="profilenav"><i class="fas fa-sliders-h"></i></a> 
        </div> 
    </header>
	</>)
}

export default Greeting;
