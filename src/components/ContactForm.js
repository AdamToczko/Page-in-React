import React from 'react';


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
        
        const subjectIsValid = subject != ''
        const fullNameIsValid = fullName != ''
        const emailIsValid = ((email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)))
        const contentIsValid = content != ''
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
                busy:false
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

   


  
    render(){
      
      const { subject, fullName, email, content, subscription, busy, error } = this.state
    //   if(busy == true ) {
    //     return (
    //       <section className="offer" id="offer">
    //        <div className="container">
    //          <h1>Data is loading  </h1>
    //        </div>
    //      </section>
    //    )
    //   } else {
    //       if(error) {
    //         return(
    //        <section className="offer" id="offer">
    //        <div className="container">
    //          <h1>Could not get data from server  </h1>
    //        </div>
    //      </section>)
  
    //       } else {
              return (
               <section className="contact" id="contact">
                    <div className="container">
                    {busy ? (<span>Please wait while your details are being sent to us</span>)
                    : (<form onSubmit={this.onFormSubmit}>
							<div>
								<label>Choose subject:   </label>
								<select
									name='subject'
                                    value={subject}
                                    onChange={(this.inputStateChange)}
								>
									<option disabled hidden value="hidden">Wybierz temat</option>
									<option>Subject 1</option>
									<option>Subject 2</option>
									<option>Subject 3</option>
								</select>
							</div>
							<div>
								<input
								    
									type='text'
									name='fullName'
									placeholder='Eneter your full name'
                                    value={fullName}
                                    onChange={(this.inputStateChange)}
								/>
							</div>
							<div>
								<input
								    
									type='email'
									placeholder='Eneter email'
									name='email'
                                    value={email}
                                    onChange={(this.inputStateChange)}
							
								/>
							</div>
							<div>
								<textarea
									
									placeholder='Type your message'
									name='content'
									value={content}
                                    onChange={(this.inputStateChange)}
								/>
							</div>
							<div>
								<label htmlFor='subscription'>
									<input
                                        
                                        id='subscription'
                                        type='checkbox'
                                        name='subscription'
                                        checked={subscription}
                                        onChange={(this.inputStateChange)}
									/>
									Subscribe
								</label>
							</div>
							<div>
								<button>Send</button>
							</div>
                            {error && <span>Fill the form please</span> }
                        </form>)}
                </div>
                </section>
            )
            }}
  
  
  export default ContactForm;