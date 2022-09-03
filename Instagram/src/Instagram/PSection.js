import React from 'react';
import './PSection.css'

const Section = (props) =>{

return(

<div className="container">

<hr />
<div className="Images">
<img  className="first" src="https://i.pinimg.com/564x/7a/da/92/7ada926eeeab416f88d837e8681e1b88.jpg" alt="post" />
<img  className="second" src="https://i.pinimg.com/564x/39/51/32/39513216d899e6d435f1f3d31c2b3b95.jpg" alt="post" />
<img  className="second" src="https://i.pinimg.com/564x/cc/76/66/cc766638cdcb8cb7718a857964f6e575.jpg" alt="post" />
</div>

<div className="Group">

<img  className="first" src="https://i.pinimg.com/564x/9e/1b/5d/9e1b5d442e6359364be9e9b515321956.jpg" alt="post" />
<img  className="second" src="https://i.pinimg.com/564x/0f/1f/b3/0f1fb3c27135767268a414b5c66bd193.jpg" alt="post" />
<img  className="second" src="https://i.pinimg.com/564x/16/8d/ea/168dea5e338a4b9dfa137422f81a6020.jpg" alt="post" />
</div>

<div className="multi">
<i class="far fa-images fa-lg"></i>
</div>
<div className="multi2">
<i class="far fa-images fa-lg"></i>
</div>
<div className="multi3">
<i class="far fa-images fa-lg"></i>
</div>

<div className="Video">
<img  className="first" src="https://i.pinimg.com/564x/7a/0b/eb/7a0beba3b3f9a57b56d996e76001ed94.jpg" alt="post" />
<img  className="second" src="https://i.pinimg.com/564x/ce/82/7a/ce827aa327d92a7251a563a4637401c1.jpg" alt="post" />
<img  className="second" src="https://i.pinimg.com/564x/58/8d/af/588daf49e97564d8df77b19e1e9a20d6.jpg" alt="post" />
</div>


<div className="multi">
<i class="far fa-images fa-lg"></i>
</div>
<div className="multi2">
<i class="far fa-images fa-lg"></i>
</div>
<div className="multi3">
<i class="far fa-images fa-lg"></i>
</div>


</div>
  );
}

export default Section;