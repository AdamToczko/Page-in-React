import React from 'react'

class Stepper extends React.Component {

    state = {
        actualStep: 0
    }

    render() {
        const { children } = this.props
        console.log(children)
        const { actualStep } = this.state
        const actualChild = children[actualStep]
        console.log('dziecko', actualChild)

        return (
			<div style={{margin:20,  boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}>
                <div style={{ display:'block', background: '#ddd', padding:10 }} >
                    <h3>Stepper</h3>
                </div>    
                <div style={{ display:'block', background: '#eee', padding:10 }} >
                   {children}
                </div>    
			</div>
		)
	}
}


export default Stepper