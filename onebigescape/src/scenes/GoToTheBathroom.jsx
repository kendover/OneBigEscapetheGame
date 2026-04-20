function GoToTheBathroom() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> You managed to escape the classroom. Now to find your bbg! Uh... Where was she again? </p>

<p> While you were scratching your ass trying to remember, you realize at the turnstile gate that left your ID in the classroom. </p>
          <p> The guard looks at you. </p>
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/TurnstileGate"> Say you forgot it </a> </li>
             <li> <a href="/TurnstileGate"> Say you're getting a temp ID </a> </li>
              <li> <a href="/TurnstileGate"> Just go through the side gate </a> </li>
          </ul>
      
    </main>
    );
}

export default GoToTheBathroom;