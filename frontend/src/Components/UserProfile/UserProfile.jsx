import React, { Component } from 'react';
import { connect } from "react-redux";
import Profile from './Components/Profile';
import ApartmentGoals from './ApartmentGoals';

class UserProfile extends Component {
    setUser = (user) => {
        const { dispatch } = this.props;
        dispatch({ type:'LOGIN', user });
    };
    
    render() {
        console.log(this.props)
        return (
            <div className='userProfile'>
                <Profile
                  user={this.props.Profile} 
                  setUser={this.setUser}
                />
                <ApartmentGoals />
            </div>
        );
    }
}

export default connect(state => state)(UserProfile);
