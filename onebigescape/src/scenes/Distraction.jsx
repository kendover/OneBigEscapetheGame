function Distraction() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> Prof: Hey! No using phones during class hours! </p>
            <p> You need a distraction! </p>
          
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/LetItRip"> LET IT RIP!! </a> </li>
            <li> <a href="/JumpOut"> Jump Out </a> </li>
            <li> <a href="/GoToTheBathroom"> Go to the bathroom </a> </li>
            
          </ul>
      
    </main>
    );
}

export default Distraction;