import React from 'react';

import Navbar from './navbar/Navbar';
import FormField from './formfield/FormField';
import Button from './button/Button'

const App = () => {
  return <h1>
     <Navbar />
     <div>
     <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
<FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
</div>
<div>
   <Button/>
</div>


     </h1>;
};

export default App;
