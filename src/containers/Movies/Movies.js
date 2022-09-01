import React, { Component } from 'react'

class Movies extends Component {

  // Testing JSX, props, state, event handlers
  state = {
    isSubscribed: false
  }

  handleSubscription = () => {
    this.setState({
      isSubscribed: !this.state.isSubscribed
    });
  }

  render() {
    return (
      <div>
        <h2>Movies | Testing class comp</h2>
        <p data-testid="heading">Welcome to Movie Portal</p>
        <a 
          href={this.props.info?.url}
          data-testid="movieLink">Know more about {this.props.info?.title}</a>

        {
          this.state.isSubscribed? 
          <p>You are a Subscriber</p>
          :
          <p>You are not a Subscriber</p>
        }

        <button type='button' data-testid="subscriptionBtn" onClick={this.handleSubscription}>
          {
            this.state.isSubscribed?
            'Unsubscribe'
            :
            'Subscribe'
          }
        </button>

      </div>
    )
  }
}

export default Movies