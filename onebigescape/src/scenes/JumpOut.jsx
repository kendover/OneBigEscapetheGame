function JumpOut() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> You jumped your classmate, Out Sangsakit. During the commotion, he reveals that he is secretly a beyblade master, and challenges you to a beyblade battle! </p>
          
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/BadEnding"> Continue... </a> </li>            
          </ul>
      
    </main>
    );
}

export default JumpOut;