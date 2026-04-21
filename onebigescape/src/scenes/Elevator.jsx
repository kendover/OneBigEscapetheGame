function Elevator() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> The elevator was at the top floor, you got caught! But wait. Maybe you still got a shot! You whip out your beyblade and- </p>
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/BadEnding"> Challenge them to a beyblade battle! </a> </li>
           
          </ul>
      
    </main>
    );
}

export default Elevator;