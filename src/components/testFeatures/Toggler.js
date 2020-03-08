import React, { useState } from 'react';

const Toggler = props => {
    const [isShown, setIsShown] = useState(false)

    const {children, title} = props

    const icon = isShown ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>
    
            return (
                	<div className='togglerContainer'>
    				    <button  onClick={()=> setIsShown(!isShown)}>
    					    <h2 className='togglerTitle'>{title} - click me {icon}</h2>
                        </button>
                       
                     <div className={['animated', isShown ? 'fadeIn' : 'fadeOut'].join(' ')} >
                        {children}
                                    </div>
    			    </div>
            )

}
export default Toggler 
