import React from 'react';


class ContactForm extends React.Component {

    state = {
		subject: 'hidden',
		fullName: '',
		email: '',
		content: '',
		subscription: '',
		busy: false,
		error: false,
	}
    onFormSubmit = (event) => {
        event.preventDefault()
    }

    inputStateChange = (event) => {
        const {value, name, type, checked } = event.target

        this.setState({
            [name]: value,
        })
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
                    <form onSubmit={this.onFormSubmit}>
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
								    required
									type='text'
									name='fullName'
									placeholder='Eneter your full name'
                                    value={fullName}
                                    onChange={(this.inputStateChange)}
								/>
							</div>
							<div>
								<input
								    required
									type='email'
									placeholder='Eneter email'
									name='email'
                                    value={email}
                                    onChange={(this.inputStateChange)}
							
								/>
							</div>
							<div>
								<textarea
									required
									placeholder='Type your message'
									name='content'
									value={content}
                                    onChange={(this.inputStateChange)}
								/>
							</div>
							<div>
								<label htmlFor='subscription'>
									<input
                                        required
                                        id='subscription'
                                        type='checkbox'
                                        name='subscription'
                                        value={subscription}
                                        onChange={(this.inputStateChange)}
									/>
									Subscribe
								</label>
							</div>
							<div>
								<button>Send</button>
							</div>
                        </form>
                </div>
                </section>
            )
            }}
  
  
  export default ContactForm;