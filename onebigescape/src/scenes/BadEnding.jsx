function BadEnding() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> Unfortunately, you lost the Beyblade Battle. Your bbg is disappointed that she’s dating a loser and breaks up with you </p>
          
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/"> Try again </a> </li>
            
          </ul>
      
    </main>
    );
}

export default BadEnding;