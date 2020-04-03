import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from 'components/Greeting';
import Profile from 'components/Profile';
import 'css/index.css';

const App = () => {
	return (
		<>
				<Greeting />

			<Profile />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))




	   
  