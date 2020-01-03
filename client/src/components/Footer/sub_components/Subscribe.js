import React , {Component} from 'react';
import axios from 'axios'

export default class Subscribe extends Component{


handleSubmitEmail =(e)=>{
    e.preventDefault()
    // let email = e.target.email.value;
    axios.post(`https://us4.api.mailchimp.com/3.0/lists/346911/members`,
    {
        'email_address': "tmjohnson1214@gmail.com",
        'status': 'subscribed',
        'merge_fields': {
          'FNAME': "Test",
          'LNAME': "Today"
        }
    }).then(res=>console.log(res.data))
    }
    render(){
        // e670080209400d0a1824fed57f9151a7-us4
        // curl --request GET \
        // --url 'https://us4.api.mailchimp.com/3.0/' \
        // --user 'anystring:e670080209400d0a1824fed57f9151a7-us4'

        return(

            <div className="col-12 col-sm-8 col-lg-4">
            <div className="single-footer-widget mb-80">
              <h5 className="widget-title">Subscribe to Our Newsletter</h5>
              <span>
                Subscribe to our newsletter and recieve notifications
                about new updates.
              </span>

              <form
              onSubmit={this.handleSubmitEmail}
                className="nl-form"
                
              >
                <input
                  type="email"
                  name="email-subscription"
                  className="form-control"
                  placeholder="Enter your email..."
                  required
                />
              
               <button type="submit">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        )
    }
}