import React from 'react';
import styles from './ContactForm.module.css'
import { Button} from "semantic-ui-react";

class ContactForm extends React.Component {

    state = {
		subject: 'hidden',
		fullName: '',
		email: '',
		content: '',
		subscription: true,
		busy: false,
		error: false,
    }

    inputStateChange = (event) => {
        const {value, name, type, checked } = event.target
        if (type === 'checkbox') {
			this.setState({
				[name]: checked,
			})
		} else {
			this.setState({
				[name]: value,
			})
		}
    }
    // added form validation 
    validateForm = () => {
        const {
			subject,
			fullName,
			email,
			content,
			subscription
        } = this.state
        
        const subjectIsValid = subject !== ''
        const fullNameIsValid = fullName !== ''
        // const emailIsValid = email !== ''
        const emailIsValid = (email == email.match(/^[a-z\d]{3,20}[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,}[a-z]{2,}$/i))
        const contentIsValid = content !== ''
        const subscriptionIsValid = subscription === true // this condition just for testing purposes

        const conditions = [subjectIsValid, fullNameIsValid, emailIsValid, contentIsValid, subscriptionIsValid]
		const conditionsAreValid = !conditions.includes(false)

		return conditionsAreValid

    }


      // emulate sending form to server with setTimeout
    onFormSubmit = (event) => {
        event.preventDefault()

        if(this.validateForm()){
			this.setState({
                busy:true
            }) 
        

        setTimeout(()=>{ 
            this.setState({
                subject: 'hidden',
                fullName: '',
                email: '',
                content: '',
                subscription: true,
                busy: false,
                error: false,
            })
        console.log('text', this.state)
        }, 2000)
        }
        else{
			this.setState({
                error:true
            })
    }
}
    select = React.createRef(null)
    input = React.createRef(null)
    input1 = React.createRef(null)
    input2 = React.createRef(null)

    componentDidMount(){
        this.select.current.focus()
    }

    render(){
       
      const { subject, fullName, email, content, subscription, busy, error } = this.state

              return (
               <section 
               className={styles.wrapper}
                > 
                    <div >
                    {busy ? (<span  className={styles.message}>Please wait while your details are being sent to us</span>)
                    : (<form onSubmit={this.onFormSubmit}>
							<div  className={styles.inputWrapper}>
								<select className={styles.input1}
                                    ref={this.select}
                                    onMouseDown={(event)=>{

                                    if(event.target.value !== 'hidden'){
                                        this.input.current.focus()
                                    } }}

									name='subject'
                                    value={subject}
                                    onChange={(this.inputStateChange)}
								>
									<option disabled hidden value="hidden">Choose subject</option>
									<option>Subject 1</option>
									<option>Subject 2</option>
									<option>Subject 3</option>
								</select>
							</div>
							<div  className={styles.inputWrapper}>
								<input className={styles.input1}
								    ref={this.input}
                                    onKeyDown={(event)=>{
                                    if(event.key === 'Enter'){
                                        this.input1.current.focus()
                                        }
                                    }}

									type='text'
									name='fullName'
									placeholder='Enter your full name'
                                    value={fullName}
                                    onChange={(this.inputStateChange)}
								/>
							</div>
							<div  className={styles.inputWrapper}>
								<input className={styles.input1}
                                    ref={this.input1}
                                    onKeyDown={(event)=>{
                                    if(event.key === 'Enter'){
                                        this.input2.current.focus()
                                        }
                                    }}
                                    
									type='email'
									placeholder='Email: abc@ab.pl'
									name='email'
                                    value={email}
                                    onChange={(this.inputStateChange)}
							
								/>
							</div>
							<div  className={styles.inputWrapper}>
								<textarea
                                    ref={this.input2}
									placeholder='Type your message'
									name='content'
									value={content}
                                    onChange={(this.inputStateChange)}
								/>
							</div>
							<div  className={styles.inputWrapper}>
								<label htmlFor='subscription'><br/>
									<input className={styles.input2}
                                        
                                        id='subscription'
                                        type='checkbox'
                                        name='subscription'
                                        checked={subscription}
                                        onChange={(this.inputStateChange)}
									/>
									Subscribe
								</label>
							</div>
							<div  className={styles.inputWrapper}>
								<Button>Send</Button>
							</div>
                            {error && <span className={styles.message}>Fill the form correctly please</span> }
                        </form>)}
                </div>
                </section>
            )
            }}
  
  
  export default ContactForm;