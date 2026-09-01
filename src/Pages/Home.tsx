import './Home.css';
import MenuButton from '../Components/MenuButton';
import EmailLink from '../Components/EmailLink';

function Home() {


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
            
              <MenuButton items = {["Home"]} />
              
            </div>

            <div className = 'topThreeTwoContainer'>
              
              <MenuButton items = {["About Me"]} />
             
            </div>

            <div className= 'topThreeThreeContainer'>
              
              <MenuButton items = {["Portfolio"]} />
                
            </div>

            <div className= 'topThreeFourContainer'>
              
              <MenuButton items = {["Resumé | CV"]} />
          
            </div>

          </div>

        </div>

        <div className = 'bodyRow'>

          <div className = 'bodyColumnOne'>

            <div className = 'bodyTitleContainer'>

              <div className = 'bufferContainer'>

              </div>

              <div className = 'titleNameTextContainer'>
                <b>Hi, I'm Korey Miller-Boyle</b>
              </div>

              <div className = 'subtitleNameTextContainer'>
                <b><i>Computational Linguist</i></b>
              </div>

            </div>

            <div className = 'bodyTextContainer'>

              <div className = 'bodyTextBarrier'></div>
              <div className = 'bodyTextActual'>
                <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2.5rem 0', lineHeight: '1.9', color: '#2d3748' }}>
                  <li><strong>•  Education:</strong> University of Toronto Master’s in Linguistics - Computational Focus</li>
                  <li><strong>•  Expertise:</strong> Computational Linguistics & Machine Learning</li>
                  <li><strong>•  Experience:</strong> 2+ years deriving insights from (un)structured data</li>
                  <li><strong>•  Research:</strong> Developed LLM benchmarks for evaluating language-model performance at UofT</li>
                  <li><strong>•  Impact:</strong> Technical and Analytical roles at Rotman Research Institute & Nokia</li>
                  <li className = 'loadBearing'>`</li>
                  <li><a href="/Portfolio" className = "ctaPortfolioButton">View Portfolio</a> <a href="/public/resumeKMB.pdf" className = "resumeDownloadButton">Download Resumé</a></li>

                </ul>

              </div>
              
              
              <div className = 'bodyTextButtonRibbon'>

              </div>

              <div className = 'bodyTextBottomBuffer'>

              </div>


            </div>

          </div>


          <div className = 'bodyColumnTwo'>
            <div className = 'secondColumnBuffer'>
      
             

            </div>
            <div className = "secondColumnPhoto">
              <div className = 'secondColumnPhotoDisplay'>
              <img src = "src\Images\portrait.jpg" className = 'portraitPhoto'/>
              </div>
            </div>

            <div className = 'secondColumnBottom'>

            </div>
          </div>

        </div>

        <div className = 'bottomRow'>
          <div className = 'bottomOneContainer' />

          <div className = 'bottomTwoContainer'>

            <div className = 'bottomTwoOneContainer'> 
              
              <div className = 'githubContainer'>
                <a href = "https://github.com/Kstar125">
                  <img src = "src\Images\github.webp" className = 'githubLogo' />
                </a>
              </div>

            </div>    
              
            <div className = 'bottomTwoTwoContainer'>
              <div className = 'emailContainer'>
                <EmailLink />
              </div>
            </div>

            <div className = 'bottomTwoThreeContainer'>
              
              <div className = 'linkedinContainer'>
                <a href = "https://www.linkedin.com/in/koreymb/">
                  <img src = "src\Images\linkedin.png" className = 'linkedinLogo' />
                </a>
                
              </div>
              
            </div>
          
          </div>
        
          
          <div className = 'bottomThreeContainer' />
         
        </div>


      </div>

  </div>;
}

export default Home;