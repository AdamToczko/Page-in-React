import React from 'react'

class Toggler extends React.Component {

    state = {
        isShowen: false
    }

    toggle = () => {
        const {isShowen } = this.state
        this.setState({
            isShowen: !isShowen
        })
    }

    

    render() {
        const {isShowen} = this.state
        const {children, title} = this.props
        const icon = isShowen ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>

        return (
            	<div style={{margin:20, width: 200, boxShadow:'3px 3px 5px rgba(0,0,0,0.5)'}}>
				    <a  onClick={this.toggle}>
					    <h2 style={{color: 'gold', marginBottom: 10}}>{title} - click me {icon}</h2>
                    </a>
                   
                 <div className={['animated', isShowen ? 'fadeIn' : 'fadeOut'].join(' ')} >
                    {children}
                                </div>
			    </div>
        )
    }

}

export default Toggler 