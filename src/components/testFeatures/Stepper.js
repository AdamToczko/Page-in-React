import React from 'react'

class Stepper extends React.Component {

    state = {
        actualStep: 2
    }

    render() {
        const { children } = this.props
        const { actualStep } = this.state
        const actualChild = children[actualStep]
        

        return (
			<div style={{margin:20,  boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}>
                <div style={{ display:'block', background: '#ddd', padding:10 }} >
                    <h3>Stepper</h3>
                </div>    
                <div style={{ display:'block', background: '#eee', padding:10 }} >
                   {actualChild.props.title}
                </div>    
			</div>
		)
	}
}


export default Stepper