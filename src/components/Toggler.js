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


    render() {
        const {isShowed} = this.state
        const {children} = this.props

        return (
            	<div style={{margin:20, width: 200, boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}>
				    <a style={{ display:'block', background: '#ddd', padding:10 }} onClick={this.toggle}>
					    <h3>Testing Toggler</h3>
                    </a>
                   
                 {isShowed &&   <div style={{ background: '#eee', padding:10 }}>
                    <h5>{children}</h5>
                                </div>}
			    </div>
        )
    }

}

export default Toggler 