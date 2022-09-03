import React from 'react';
import './Profile.css';


const Profile = (props) => {
return(

<div>
<img className="profilePicture" src="https://i.pinimg.com/originals/b9/9f/54/b99f54a6eab4260498ed1ea6317ab51e.jpg" alt="profilePicture"/>
<p className="Name">saraaleswed</p>
<button className="Edit">Edit Profile</button>
<button className="Settings"><i class="fas fa-cog fa-x"></i></button><br />

<div className="follow">
<p className="info"><b>9</b>  posts</p>
<p className="info"><b>774</b>  followers</p>
<p className="info"><b>764</b>  following</p>
</div>

<div className="Bio">
<p className="bio">Sarah (●'◡'●)</p>
<p className="bio">I would rather die of passion than of boredom. 🙄</p>
<p>Hello stranger 🙋🏽‍♀️</p>
</div>


</div>
)
}

export default Profile;