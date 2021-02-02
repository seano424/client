import React from 'react';
import Spinner from './spinner/Spinner';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '404523396184-k095hvb6tbk1f4vkkul3j960n809vva1.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = () => {
    this.setState({isSignedIn: this.auth.isSignedIn.get()})
  }

  onSignOut = () => {
    this.auth.signOut();
  }

  onSignIn = () => {
    this.auth.signIn();
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <Spinner />
    } else if (this.state.isSignedIn) {
      return (
        <button onClick={this.onSignOut} className='ui button google red'>
          <i className='google icon'></i>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignIn} className='ui button google red'>
          <i className='google icon'></i>
          Sign In with Google
        </button>
      )
    }
  }

  render () {
    return (
      this.renderAuthButton()
    )
  }
}

export default GoogleAuth;