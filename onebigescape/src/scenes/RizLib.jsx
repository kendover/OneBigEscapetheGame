function RizLib() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> As soon as you enter the library, you overhear the guards being informed that a student is cutting class. They’re onto you! </p>
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/RunPast"> Run past the guards </a> </li>
             <li> <a href="/ReasonWithThem"> Reason with Them </a> </li>
              <li> <a href="/TurnstileGate"> Nevermind, go back! </a> </li>
          </ul>
      
    </main>
    );
}

export default RizLib;