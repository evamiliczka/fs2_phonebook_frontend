import ReactDOM from 'react-dom/client'
import React from 'react';

import PhoneBookDB from './PhoneBookDB';
import Currency from './Currency'
import Countries from './Countries'
import Footer from './components/Footer'




    ReactDOM.createRoot(document.getElementById('root')).render(
      <><PhoneBookDB />
      <br></br>
      <div><Countries /></div>
      <br></br>
      <div> <Currency /> </div> 
      <br></br>
      <Footer />
      </>
    )
    





