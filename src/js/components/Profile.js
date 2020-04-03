import React from 'react';
import profile from 'img/girlprofile.jpg';
import boy1 from 'img/boy1.jpg';
import boy2 from 'img/boy2.jpg';
import boy3 from 'img/boy3.jpg';
import girl1 from 'img/girl1.jpg';
import girl2 from 'img/girl2.jpg';
import girl3 from 'img/girl3.jpg';
import girl4 from 'img/girl4.jpg';
import sent from 'img/sent.png';
import 'css/Profile.css'


const Profile = () => {

	return (
		<>
	<section className="chat">
        
		<div className="profilepage">
			<img src={profile} alt="profile" className="profile" size="80%"/>
			<h1>Rachel Green</h1>
			<a href="#">Activity</a>
			<a href="#">Profile</a>
			<a href="#">Messages</a>
			<a href="#">Settings</a>
		</div>

		<article className="people">
			   <input type="search" placeholder="Search Contacts..." className="search"/>
		<div className="chatpeople">
			<img src={girl2} className="chatdp" alt="boy1"/>
			<div className="heading">
			   <a href="chat.html" className="nav"><h3>Carol birani</h3></a>
			<h2 className="active">Good Morning</h2>
		   </div>
		   <div>
			   <span className="number">1</span>
			   <h5>11:00</h5>
		   </div>
		</div>
		<div className="chatpeople">
		   <img src={girl1} className="chatdp" alt="boy1"/>
		   <div className="heading">
		   <h3>Monica Shell</h3>
		   <h2 className="active">Hey</h2>
		   </div>
		   <div>
				   <span className="number">1</span>
				   <h5>10:00</h5>
			   </div>
	   </div>
	   <div className="chatpeople">
		   <img src={girl3} className="chatdp" alt="boy1"/>
		   <div className="heading">
		   <h3>Pheebe Healler</h3>
		   <h2>I upoloaded my assigement</h2>
		   </div>
		   <div>
				   <h5>9:45</h5>
			   </div>
	   </div>
	   <div className="chatpeople">
		   <img src={boy2} className="chatdp" alt="boy1"/>
		   <div className="heading">
			<h3>Joely Tribiani</h3>
		   <h2>I miss you too</h2>
		   </div>
		   <div>
				   <h5>11:46</h5>
			   </div>
	   </div>
	   <div className="chatpeople">
		   <img src={boy1} className="chatdp" alt="boy1"/>
		   <div className="heading">
		   <h3>Ross Galler</h3>
		   <h2>Good Night</h2>
		   </div>
		   <div>
				   <h5>11:50</h5>
			   </div>
	   </div>
	   <div className="chatpeople">
		   <img src={boy3} className="chatdp" alt="boy1"/>
		   <div className="heading">
		   <h3>Chalnder Asiu</h3>
		   <h2>Okay!!</h2>
		   </div>
		   <div>
				   <h5>11:45</h5>
			   </div>
	   </div>
	   <div className="chatpeople">
		   <img src={girl4} className="chatdp" alt="boy1"/>
		   <div className="heading">
			<h3>Susen Shell</h3>
		   <h2>Good Morning</h2>
		   </div>
		   <div>
				   <h5>11:00</h5>
			   </div>
	   </div>
	
	   </article> 
	   <section className="chatbtwnppl">
		   <div className="container">
				   <img src={profile} alt="Avatar"/>
				   <p>Hello. How are you today?</p>
				   <span className="time-right">11:00 Read</span>
				 </div>
				 
				 <div className="container darker">
				   <img src={girl2} alt="Avatar" className="right"/>
				   <p>Hey! I'm fine. Thanks for asking!</p>
				   <span className="time-left">11:01 Read</span>
				 </div>
				 
				 <div className="container">
				   <img src={profile} alt="Avatar"/>
				   <p>Sweet! So, what do you wanna do today?</p>
				   <span className="time-right">11:02 Read</span>
				 </div>
				 
				 <div className="container darker">
				   <img src={girl2} alt="Avatar" className="right"/>
				   <p>Nothing , i am doing my project and what about you ?</p>
				   <span className="time-left">11:05 Read</span>
				 </div>
				 <div className="container darker">
				 <img src={profile} alt="Avatar"/>
				   <p>Ohky !! well I am almost to Finish.</p>
				   <span className="time-right">11:00 Read</span>
				 </div>
				 
				 <div className="container darker">
				   <img src={girl2} alt="Avatar" className="right"/>
				   <p>Good.Well if i have any doubt I will call</p>
				   <span className="time-left">11:01 Deliverd</span>
				 </div>

				 <input type="text" size="80%" placeholder="Type Something......" className="type"/>
				 <img src={sent} className="sent" alt="sent"/>
   </section>
   </section>
		</>)
}

export default Profile;
