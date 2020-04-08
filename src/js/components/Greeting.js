import React from 'react';
import logo from 'img/logo.jpg';
import 'css/index.css'

const Greeting = () => {
	return (
	<>
		<header className="header">
        <div>
                  <h2> Menu</h2>
        </div>
        <div>
            <img src={logo} alt="logo" className="logo"/>
        </div>   
        <div>
                <i class="fas fa-search"></i>
                <i class="fas fa-cog"></i>
                 <i class="fas fa-sliders-h"></i>
        </div> 
    </header>
	</>)
}

export default Greeting;
