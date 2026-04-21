function GoodEnding() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> Congratulations! After a glorious victory, you successfully escaped your boring class to date your babygirl! And you lived happily ever after </p>
            <p> But wait, did you see the <i> secret ending? </i></p>
          
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/"> Let me double check! </a> </li>
            
          </ul>
      
    </main>
    );
}

export default GoodEnding;