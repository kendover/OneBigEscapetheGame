function CTC() {
    return (
         <main>
      <h1> One Big Escape!! </h1>
      
          <img src="./graphics/placeholder.png" class="graphic"/> 
          {/* Image for graphic, please try to make sure it's a jpeg or webm for quicker loading times. */}
          
            <p> <strong> Guard 2: </strong> Are you a prof? </p>
            <p> <strong> You: </strong> Yeahh... </p>
            <p> <strong> Guard 1: </strong> You don't look like one. </p>
            <p> <strong> You: </strong> I'm a new hire? </p>
            <p> <strong> Guard 3: </strong> Makes sense to me. </p>
            <p> Wow, it's a good thing those guards didn't really care! That was easy! </p>
            <p> Now, where do you go? </p>
          <ul className="options"> {/* Feel free to add/remove */}
            <li> <a href="/Gonz"> Gonz </a> </li>
             <li> <a href="/CTC"> CTC </a> </li>
              <li> <a href="/RizLib"> Rizal Library </a> </li>
          </ul>
      
    </main>
    );
}

export default CTC;