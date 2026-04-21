function BeybladeBattle() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> This is it. You've made it too far to back down now! </p>
            <p> You pull out your trusty beyblade. After all the beyblade battles, you have a feeling that this time will be different </p>
            <p> <strong> What is your Beyblade's aura? </strong> </p>
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/BeybladeBattleTrivia"> PEPERIZZAL </a> </li>
           <li> <a href="/BeybladeBattleTrivia"> AURACIODELACOSTA </a> </li>
           <li> <a href="/BeybladeBattleTrivia"> JESWEETNIYONAMAN </a> </li>
           <li class="white"> <a href="/TrueEnding"> YOURBEBEGIRL </a> </li>
          </ul>
      
    </main>
    );
}

export default BeybladeBattle;