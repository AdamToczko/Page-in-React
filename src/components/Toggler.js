import React from 'react'

class Toggler extends React.Component {

    state = {
        isShowed: false
    }

    toggle = () => {
        const {isShowed } = this.state
        this.setState({
            isShowed: !isShowed
        })
    }

    // style={{margin:20, width: 200, boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}
    // style={{ display:'block', background: '#ddd', padding:10 }}
    // style={{ background: '#eee', marginTop: 30 }}

    render() {
        const {isShowed} = this.state
        const {children} = this.props

        return (
            	<div style={{margin:20, width: 150, boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}>
				    <a  onClick={this.toggle}>
					    <h2 style={{color: 'gold', marginBottom: 10}}>Toggler - click me </h2>
                    </a>
                   
                 {isShowed &&   <div >
                    <h5>{children}</h5>
                                </div>}
			    </div>
        )
    }

}

export default Toggler 