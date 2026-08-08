import './About.css';

function About() {
  return <div> 

    <div className = 'globalBackground'>
        
        <div className = 'topRow'>

          <div className = 'topOne'>

            <div className = 'topOneOneContainer'>
              <p className = 'nameText'><b>Korey.</b></p>
            </div>
            <div className = 'topOneTwoContainer'>
             
            </div>
            <div className = 'topOneThreeContainer'>
              
            </div>
           
          </div>

          <div className = 'topTwo'> 

          </div>

          <div className = 'topThree'>
            <div className = 'topThreeOneContainer'>
              
         
              
              
            </div>

            <div className = 'topThreeTwoContainer'>
            
            
               
            </div>

            <div className= 'topThreeThreeContainer'>
           
             
                
            </div>

            <div className= 'topThreeFourContainer'>
              
             
                
            </div>

          </div>
        </div>


        <div className = 'bodyRow'>

          <div className = 'bodyColumnOne'>

            <div className = 'bodyTitleContainer'>

              <div className = 'bufferContainer'>

              </div>

              <div className = 'titleNameTextContainer'>
                <b>Test 1</b>
              </div>

              <div className = 'subtitleNameTextContainer'>
                <b><i>Computational Linguist</i></b>
              </div>

            </div>

            <div className = 'bodyTextContainer'>

              <div className = 'bodyTextBarrier'>

              </div>

              <div className = 'bodyTextActual'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br/> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>

              <div className = 'bodyTextButtonRibbon'>
                
              </div>

              <div className = 'bodyTextBottomBuffer'>

              </div>


            </div>

          </div>


          <div className = 'bodyColumnTwo'>

          </div>

        </div>
      
      <div className = 'bottomRow'>
          
        <div className = 'bottomOneContainer' />

          <div className = 'bottomTwoContainer'>

            <div className = 'bottomTwoOneContainer'> 

              <div className = 'githubContainer'>
                <img src = "src\Images\github.webp" className = 'githubLogo' />
              </div>

            </div>    
              
            <div className = 'bottomTwoTwoContainer'>
              <div className = 'emailContainer'>
                <img src = "src\Images\email.webp" className = 'emailLogo' />
              </div>
            </div>

            <div className = 'bottomTwoThreeContainer'>

              <div className = 'linkedinContainer'>
                <img src = "src\Images\linkedin.png" className = 'linkedinLogo' />
              </div>

            </div>
          
          </div>
        
          
          <div className = 'bottomThreeContainer' />
          
        
      </div>


    </div>

    </div>;
}

export default About;