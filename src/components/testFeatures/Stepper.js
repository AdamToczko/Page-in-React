import React from 'react'
import { Button } from "semantic-ui-react";

const Steps = ({ title, onChangeStep}) => {
    return (<span style={{marginLeft:20}}><Button onClick={onChangeStep}>{title}</Button></span>)
}


class Stepper extends React.Component {

    state = {
        actualStep: 0
    }

    setStep = (index) => {
        
        this.setState ({
            actualStep: index
        })
    }

    render() {
        const { children } = this.props
        const { actualStep } = this.state
        const actualChild = children[actualStep]
        

        return (
			<div className='stepperContainer'>
                <div className='stepperHeader'  >
                    {children.map((child, index)=>{
                        
                        return (<Steps key={index} title={child.props.title}  
                        onChangeStep={()=>{
                            this.setStep(index)
                        }}
                        />
                        )}
                    )} 
                </div>    
                <div className='stepperDisplay' >
                   {actualChild.props.children } 
                   
                </div>    
			</div>
		)
	}
}


export default Stepper