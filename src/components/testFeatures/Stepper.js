import React from 'react'

class Stepper extends React.Component {

    state = {
        actualStep: 0
    }

    render() {
        const {children} = this.props

        return (
			<div style={{margin:20,  boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}>
                <div style={{ display:'block', background: '#ddd', padding:10 }} >
                    
                </div>    
                <div style={{ display:'block', background: '#eee', padding:10 }} >
                   {children}
                </div>    
			</div>
		)
	}
}


export default Stepper