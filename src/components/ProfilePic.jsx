import React from 'react';
import './_profilepic.scss';
import Pic from '../images/profilePic.JPG'

export default function ProfilePic() {
  return (
    <div className='profilePic'>
       <img src={Pic} alt="" /> 
    </div>
  )
}
