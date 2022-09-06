import './contect-me.css';
import {  } from 'react-bootstrap';
const contect = () => {
    return (
      <div className="bg-secondary"> 
 <div className="container">
	<div className="row">
			<h1 className="text-center">contact us</h1>
	</div>
	<div className="row">
			{/* <h4 className='text-align:center'>We'd love to hear from you!</h4> */}
	</div>
	<div className="row input-container">
			<div className="col-xs-12">
				<div className="styled-input wide">
					<input type="text" required />
					<label>Name</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input">
					<input type="text" required />
					<label>Email</label> 
				</div>
			</div>
			<div className="col-md-6 col-sm-12">
				<div className="styled-input aaaa">
					<input type="text" required />
					<label>Phone Number</label> 
				</div>
			</div>
			<div className="col-xs-12">
				<div className="styled-input wide">
					<textarea required></textarea>
					<label>Message</label>
				</div>
			</div>
			<div className="col-xs-12">
				<div className="btn-lrg submit-btn">Send Message</div>
			</div>
	</div>
</div>
 </div>
 
    );
  }
  export default contect;