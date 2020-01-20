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
        const {children, title} = this.props
        const icon = isShowed ? <i class="fas fa-chevron-up"></i> : <i class="fas fa-chevron-down"></i>

        return (
            	<div style={{margin:20, width: 200, boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}>
				    <a  onClick={this.toggle}>
					    <h2 style={{color: 'gold', marginBottom: 10}}>{title} - click me {icon}</h2>
                    </a>
                   
                 {isShowed &&   <div >
                    <h5>{children}</h5>
                                </div>}
			    </div>
        )
    }

}

export default Toggler 