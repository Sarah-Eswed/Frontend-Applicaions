import React from 'react';
import './App.css';
import Story from './Instagram/Story';
import Posts from './Instagram/Posts';
import Like from './Instagram/Like';
import Comment from './Instagram/Comment';
import Profile from './Instagram/Profile';
import Section from './Instagram/PSection';



function App(){

  return(

<div className="App"> 

<div className="nav">
<img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png" alt="logo"></img>

<input type="text" name="search" placeholder="&#xf007; Search" className="Search" /> 

<button className="btn"><i class="fas fa-home fa-2x"></i></button>
<button className="btn2"><i class="far fa-paper-plane fa-2x"></i></button>
<button className="btn2"><i class="far fa-compass fa-2x"></i></button>
<button className="btn2"><i class="far fa-heart fa-2x"></i></button>

<img className="Avatar" src="https://i.pinimg.com/originals/b9/9f/54/b99f54a6eab4260498ed1ea6317ab51e.jpg"></img>

</div>

<div className="stories">

<Story  src="https://i.pinimg.com/originals/62/70/e2/6270e2f16aec1451977c4c2d437be1e6.jpg" alt="unread"
  src1="https://66.media.tumblr.com/298a3258ab616ffbf8544ac7a82d5bfc/tumblr_p1s1buwMNL1x020wmo8_1280.jpg" alt1="read"
  src2="https://i.pinimg.com/originals/1f/6a/f0/1f6af0d71e7fba093702fc49a37fe088.jpg" alt2="read"
  src3="https://64.media.tumblr.com/47544d09f189c33bf81a996b308f31cf/tumblr_p1s1buwMNL1x020wmo6_1280.jpg" alt3="read"
  src4="https://i.pinimg.com/originals/9d/52/85/9d5285fede2ac8d9edfbe3e6589755bd.jpg" alt4="read"
  src5="https://i.pinimg.com/originals/ef/be/e1/efbee126346c1e2cda228ef3e5e17e55.jpg" alt5="read"
  src6="https://i.pinimg.com/originals/47/e1/83/47e18339d95346a468102580e49e56e5.jpg" alt6="read"
  src8="https://i.pinimg.com/originals/94/2a/23/942a23dbf44c4fba5924749bf759877c.jpg" alt8="read"
  src9="https://i.pinimg.com/originals/a0/e1/7c/a0e17c2f7f308eb8f6e8ca913349211a.jpg" alt9="read"
  src10="https://i.pinimg.com/originals/0e/77/56/0e775677f6d42b96347a14c1dbaf3733.jpg" alt10="read"
  name="Sarah" name1="Razan"  name2="Saja" name3="Leen" name4="Waed" name5="Maysam" name6="Heba" 
  name7="Lubna" name8="Jenan" name9="Ayah" 
  />
</div>

<div className="posts">
<Posts src="https://avatars1.githubusercontent.com/u/50365601?s=400&u=989222ba96509630cbe3b495c50a9f5bea373816&v=4" alt="userAvatar"
 username="khadeejah"

src1="https://i.pinimg.com/originals/0c/04/c2/0c04c239064256aa76fde112008a0aae.png" alt1="post"
/>

<Like />

<Comment  userName="Ahmad_97" comment="Sba7oo" 
  hours="5 hours ago"
/>
</div>

<div className="posts">
<Posts src="https://i.pinimg.com/originals/9d/7a/19/9d7a1930f6df2e70512cabe8554562a6.png" alt="userAvatar"
 username="saraaleswed"

src1="https://i.pinimg.com/564x/f1/96/7e/f1967e58cdffe9aa4a891891f4c8a864.jpg" alt1="post"
/>

<Like />

<Comment  userName="dd34_34" comment="Same 😛" 
  hours="7 hours ago"
/>
</div>

<div className="posts">
<Posts src="https://images6.fanpop.com/image/photos/33900000/Goblet-of-Fire-harry-potter-the-boy-who-lived-and-much-more-33966479-936-683.jpg" alt="userAvatar"
 username="harry"

src1="https://images.ctfassets.net/usf1vwtuqyxm/3cU0fzEJfGokY0iUgKyooA/77042f454b4db7fe4f168f843ed0ccc6/WB_F2_WhompingWillow_FordCrashesIntoTree_HP2MPC-020.jpg" alt1="post"
/>

<Like />

<Comment  userName="weasly_ron" comment="it was an accident mate 😒" 
  hours="1 day ago"
/>
</div>

<hr />


<div className="Profile">
<Profile />
</div>


<div>

<Section />

</div>


</div>
  );
}

export default App;