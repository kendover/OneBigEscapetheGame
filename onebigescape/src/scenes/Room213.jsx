function Room213() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> Congratulations, if you made it here it means you either went through a lot of rooms,
              got really lucky, or paid attention to the previous scene. 
              Unfortunately for you, this room was just a Red Herring.</p>
            <p> Unfortunately, now you must die.</p>
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/BadEnding"> Oh man... </a> </li>
          </ul>
      
    </main>
    );
}

export default Room213;