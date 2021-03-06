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

 
    <div class="Column_1" id="Contact">
      <img src="./urbantoursAbout.jpg"alt='urban tours logo'></img>
 
 <h1>Contact  Urban Tours  @ (555) 555-0222</h1>
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
 

    <div class="Row" id="Review"> 
		  <div class="Column_2"> 

			    <h1>Reviews</h1>
            <h2>"Urban Tours sets a new standard!"<br></br></h2>
            <br></br>
            <h3>"We had an amazing time on our Urban Tours trip. I love how everything was tailored to our needs, each transport was handled, we had an assistant or a guide or someone everywhere we went, and we even had a backup if we needed to call someone with an issue. The trip itself was wonderful and couldn’t have been better planned unless I had more time for vacation!"</h3>
        </div>
		</div>
    			

    <footer>
      <p>
        <center>
        
          <a href="http://tarracokor.com/"><br></br>Urban Tours</a>
           @Copyright 2019-2020 <br></br> Urban Tours Inc.
        </center>
        <br />
      </p>
    </footer>

    </main>
    
    
  );
}
}

export default App;
