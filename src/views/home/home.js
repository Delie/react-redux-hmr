
import React, { Component, PropTypes } from 'react'

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render()
    {
        return (
            <div>
                <h1>Home</h1>
				<p>
					React sandbox project utilising:<br/>
					<strong>React, React Router, Redux, Redux Dev Tools, HMR, SASS, and Twitter Bootstrap 4.</strong>
				</p>
            </div>
        )
    }
}
