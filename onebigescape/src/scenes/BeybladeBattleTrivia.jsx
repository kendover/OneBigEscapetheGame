function BeybladeBattle() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> Now you have to show off your Beyblade knowledge (you can’t have them thinking you’re a LARPER). Hint: It’s a My Little Pony Character. IF YOU GOOGLE IT YOU’RE A FAKER
Which one is NOT a real Beyblade? </p>
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/BadEnding"> Omega Dragunis </a> </li>
           <li> <a href="/BadEnding"> Samurai Ifraid </a> </li>
           <li> <a href="/GoodEnding"> Flash Magnus </a> </li>
           <li> <a href="/BadEnding"> Wing Spin Pegasus </a> </li>
          </ul>
      
    </main>
    );
}

export default BeybladeBattle;