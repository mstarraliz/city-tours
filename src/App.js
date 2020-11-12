import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import TourList from "./components/TourList"



class App extends Component {
  render() {
  return (
    <main>
      <Navbar />
      <TourList/>


	<div class="Row" id="About"> 
		  <div class="Column_1">
			    <h1>About Us:</h1>
				<p>We design exciting journeys for individuals who appreciate new experiences in different cities across the globe. Whether you’re looking for meaningful time with your loved ones or the chance to reconnect with yourself or meeting fascinating people with different stories to tell. We take you on journeys to connect you with local people, cultures and customs.Let Urban Tours help you to discover your dream tour with a seamless and personalised itinerary.
        Speak to our Travel Designers to start planning your own tailor-made trip.</p>
		</div>
</div>
    <div class="Row" id="Contact"> 
		  <div class="Column_2"> 
			    <h1>Contact  Urban Tours  @ (773) 255-0222</h1>
            <h2>Give us a call or send us your contact information and we can get started with your dream tour today!<br></br>
                </h2>
            <form>
                  <p>Enter your name:</p>
                    <input type="text"/>
           
                    <p>Enter your phone number:</p>
                      <input type="text"/>
            
                    <p>Enter your email address:</p>
                       <input type="text"/>
              
                <input type='submit' />
              
            </form>
        
        </div>
		</div>
    			

    <footer>
      <p>
        <center>
          Urban Tours Inc.,
          <a href="http://tarracokor.com/">Urban Tours</a>
        </center>
        <br />
      </p>
    </footer>

    </main>
    
    
  );
}
}

export default App;
