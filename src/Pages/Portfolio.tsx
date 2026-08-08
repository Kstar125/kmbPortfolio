import './Portfolio.css';
import MenuButton from '../Components/MenuButton';

function Portfolio() {
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
              
              <MenuButton items = {["Research"]} />
          
            </div>

          </div>
        </div>


        <div className = 'bodyRow'>

          <div className = 'bodyColumnOne'>
            <div className = 'bodyColumnOneOneContainer'>
              <div className = 'bodyColumnOneTitleContainer'>
                <div className = 'leftTitleContainer'>
                  <b>Quantitative Discourse Coherence</b>
                </div>

                <div className = 'rightTitleContainer'>
                  <a href = 'https://github.com/Kstar125' className = 'gitHubLink'><i><b>GitHub</b></i></a>
                </div>
              </div>

              <div className = 'bodyColumnOneTextContainer'>
                <p className = 'languageSubtitles'>Python, R, MySQL.</p>
               
                <p className = 'projectText'>Quantitative metrics formulated from sentence-level embeddings derived from BERT-family LLMs. Metrics implemented follownig a similarity-based and distance-based approach.
                <br />
                Novel metrics exceed prior benchmark.
                </p>
              </div>
            </div>


            <div className = 'bodyColumnOneThreeContainer'>
           
              <div className = 'bodyColumnOneTitleContainer'>
                <div className = 'leftTitleContainer'>
                  <b>English & Slavic Languages Cognate Facilitation</b>
                </div>

                <div className = 'rightTitleContainer'>
                  <a href = 'https://github.com/Kstar125/engSlaLexicalDecisionTask' className = 'gitHubLink'><i><b>GitHub</b></i></a>
                </div>
                
              </div>

              <div className = 'bodyColumnOneTextContainer'>
                <p className = 'languageSubtitles'>JavaScript (Node, React), CSS, HTML.</p>
               
                <p className = 'projectText'>Quantitative metrics formulated from sentence-level embeddings derived from BERT-family LLMs. Metrics implemented follownig a similarity-based and distance-based approach.
                <br />
                Novel metrics exceed prior benchmark.
                </p>
              </div>
            </div>

          </div>

          <div className = 'bodyColumnTwo'>

          </div>

        </div>

        <div className = 'bottomRow'>
          
        </div>


      </div>

  </div>;
}

export default Portfolio;