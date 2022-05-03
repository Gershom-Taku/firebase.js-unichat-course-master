import React  from'react';
import{ GooogleOutlined,FacebookOutlined } from '@ant-design/icons';

const login =() =>{

return(

<div class="login-page">
<div class="login-card">
<h2 >Welcome to Audi-chat </h2>
<div className="login-button goole"> 

<GooogleOutlined/>Sign in with Google
</div>
<br></br>
<div className="login-button with facebook">

<FacebookOutlined/>Sign with facebook

</div>
</div>

</div>

);

}
export default Login;