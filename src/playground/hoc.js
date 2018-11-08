//HOC Higher Order Componenets  A Component That renders another Components
//ReuseCode, Render hijacking, Prop Manipulation, Abstract State


import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
	<div>
		<h1>Info</h1>
		<p>this info is {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent)=>{
	return (props) =>(
		<div>
			{props.isAdmin && <p>This is a pricvate info. Please don'e share!</p>}
			<WrappedComponent {...props} />
		</div>
	)
}
const requiredAuthentication = (WrappedComponent)=>{
	return (props)=>(
		<div>
			{props.isAuthenticated ? (
				<WrappedComponent {...props} />
				) : (
				<p> Please Login in To view Info </p>
				) 
			}
		</div>
	)
}
const AdminInfo = withAdminWarning(Info);
const AthInfo = requiredAuthentication(Info)
ReactDOM.render(<AthInfo isAuthenticated={true} info="This is the deailts" />, document.getElementById("app"))