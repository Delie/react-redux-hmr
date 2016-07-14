import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as reduxActions from '../actions/actions'

  class Header extends Component {
	constructor(props)
	{
		super(props);
		this.angerMonkey = this. angerMonkey.bind(this);
		this.pleaseMonkey = this. pleaseMonkey.bind(this);
	}

	render()
	{
		return (
            <div id="header">
				<div id="headerText">React Test Project</div>
                <Link to='/'>Home</Link> |&nbsp; 
				<Link to='/about'>About</Link> |&nbsp;
				<Link to='/contact'>Contact</Link>  |&nbsp; 
				<Link to='/login'>Login</Link> |&nbsp; 
				
				<a onClick={this.angerMonkey}>Redux 1</a> |&nbsp;
				<a onClick={this.pleaseMonkey}>Redux 2</a><br/>
            </div>
        )
	}
	angerMonkey(){
		this.props.actions.MakeMonkeyAngry();
	}
	pleaseMonkey(){
		this.props.actions.MakeMonkeyHappy();
	}
}

Header.propTypes = {
	actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(reduxActions, dispatch)
	};
}

export default connect(null, mapDispatchToProps)(Header)
