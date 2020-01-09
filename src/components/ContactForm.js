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
								<label>Choose subject</label>
								<select
									name='subject'
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
								/>
							</div>
							<div>
								<input
								required
									type='email'
									placeholder='Eneter email'
									name='email'
		
							
								/>
							</div>
							<div>
								<textarea
									required
									placeholder='Type your message'
									name='content'
									
								/>
							</div>
							<div>
								<label htmlFor='subscription'>
									<input
										id='subscription'
										type='checkbox'
										required
										name='subscription'
									
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