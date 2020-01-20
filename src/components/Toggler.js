import React from 'react'

class Toggler extends React.Component {

    state = {
        isShown: false
    }

    toggle = () => {
        const {isShown } = this.state
        this.setState({
            isShown: !isShown
        })
    }

    componentDidMount(){
        const { showOnInit } = this.props

        if(showOnInit){
            console.log('showOnInit jest', showOnInit)
            this.setState({
                isShown: showOnInit
            })
        }

    }

    render() {
        const {isShown} = this.state
        const {children, title} = this.props
        const icon = isShown ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>

        return (
            	<div className='togglerContainer'>
				    <a  onClick={this.toggle}>
					    <h2 className='togglerTitle'>{title} - click me {icon}</h2>
                    </a>
                   
                 <div className={['animated', isShown ? 'fadeIn' : 'fadeOut'].join(' ')} >
                    {children}
                                </div>
			    </div>
        )
    }

}

export default Toggler 