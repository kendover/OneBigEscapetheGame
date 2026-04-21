function Gonz() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> You grab a snack on the way to meet your bbg but due to inflation, you’re gonna have to pay ₱10000000000000 </p>
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/PayThePrice"> Pay the price </a> </li>
             <li> <a href="/FightTheChef"> Fight the chef </a> </li>
              <li> <a href="/TurnstileGate"> Go back </a> </li>
          </ul>
      
    </main>
    );
}

export default Gonz;