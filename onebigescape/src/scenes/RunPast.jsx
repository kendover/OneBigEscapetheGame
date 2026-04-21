function RizLib() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> The guards chase you down throughout the hallway! Which way do you take? </p>
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/Stairs"> Stairs </a> </li>
             <li> <a href="/Elevator"> Elevator </a> </li>
           
          </ul>
      
    </main>
    );
}

export default RizLib;