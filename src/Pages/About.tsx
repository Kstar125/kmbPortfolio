import './About.css';
import MenuButton from '../Components/MenuButton';
import EmailLink from '../Components/EmailLink';

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

            <div className = 'bodyTitleAboutContainer'>

              <div className = 'bufferAboutContainer'>

              </div>

              <div className = 'titleNameTextContainer'>
                <b>About Me</b>
              </div>

              <div className = 'subtitleNameTextContainer'>
                <b><i>Computational Linguist</i></b>
              </div>

            </div>

            <div className = 'bodyTextContainer'>

              <div className = 'bodyTextBarrier'></div>

              <div className = "bodyTextActualAbout">
              <span>I'm an MA graduate from UofT, specializing in linguistics and artificial intelligence. I apply computational approaches (such as NLP and machine learning) to questions examining <a href = "https://github.com/Kstar125/engSlaLexicalDecisionTask" className = "aboutMeLink">human communication</a> and <a href="https://github.com/Kstar125/discourseCoherenceMetrics" className = "aboutMeLink">how well machines can do this, too.</a> I aim to take what I've learned from my research and prior work at the Rotman Research Institute and Nokia, and apply these methods to derive data-driven insights for novel industry projects. Otherwise, in my free time I enjoy writing and fencing.<br/><br/> If anything above sounds interesting to you, feel free to connect <a href = "https://www.linkedin.com/in/koreymb/" className = "aboutMeLink">here</a>.</span>
              </div>

              <div className = 'bodyTextButtonRibbon'></div>

              <div className = 'bodyTextBottomBuffer'></div>


            </div>

          </div>


          <div className = 'bodyColumnTwo'>
            <div className = 'secondColumnBuffer'>
      
             

            </div>
            <div className = "secondColumnPhoto">
              <div className = 'secondColumnPhotoDisplay'>
              <img src = "aboutMe.png" className = 'aboutPhoto'/>
              </div>
            </div>

            <div className = 'secondColumnBottom'></div>
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

export default About;