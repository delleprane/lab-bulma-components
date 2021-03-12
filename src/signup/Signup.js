import React from 'react';

import React from 'react';
import Navbar from '../navbar/Navbar.js';
import FormField from '../formfield/FormField';
import Button from '../button/Button'

function Signup() {
   return (
      <div>
      <Navbar/>
<FormField label="Name" type="text" placeholder="e.g Joana"/>
<FormField label="Email" type="email" placeholder="e.g joana@gmail.com"/>
<FormField label="Senha" type="password" placeholder="*****"/>
<Button/>


  </div>
   )};

   export default Signup;


