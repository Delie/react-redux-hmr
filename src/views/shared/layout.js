import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Layout extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
            <div>
				<div id="reduxInfo">
					<strong>Redux MonkeyState</strong>: {this.props.reduxState.MonkeyState.CurrentState }.  <strong>Path:</strong> /{this.props.reduxState.router.location.pathname.substring(1)}
				</div>
                <Header />
				<div id="pageContainer">
					{ this.props.children }
				</div>
                <Footer />
			
            </div>
        )
	}
}

Layout.propTypes = {
	pushState: PropTypes.func.isRequired,
	reduxState: PropTypes.object,

	// Injected by React Router
	children: PropTypes.node
}

function mapStateToProps(state) {
	return {
		reduxState:state
	}
}

export default connect(mapStateToProps, {
	pushState
})(Layout)
