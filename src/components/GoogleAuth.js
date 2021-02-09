import React from 'react';
import Spinner from './spinner/Spinner';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '404523396184-k095hvb6tbk1f4vkkul3j960n809vva1.apps.googleusercontent.com',
        scope: 'profile email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance()
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut()
    }
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  onSignInClick = () => {
    this.auth.signIn();
  }
  
  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <Spinner />
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className='ui button google red'>
          <i className='google icon'></i>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className='ui button google red'>
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

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);