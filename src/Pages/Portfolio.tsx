import './Portfolio.css';
import MenuButton from '../Components/MenuButton';
import EmailLink from '../Components/EmailLink';
import { useState } from 'react';


function Portfolio(){

  let [imageState, setImageState] = useState(0)

  let [imageURL, setImageURL] = useState("/coherenceMetric.png")

  function imageUpdate(input: number): void {
    setImageState(imageState = input)
    //console.log(imageState)

    if(imageState === 0){
      setImageURL(imageURL = "/coherenceMetric.png")
    }
    else if(imageState === 1){
      setImageURL(imageURL = "/cognateMetric.png")
    }
    else if(imageState === 2){
      setImageURL(imageURL = "/hedging.png")
    }
  }



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

            <div className = 'bodyColumnBuffer' />

            <div className = 'bodyColumnOneOneContainer' onMouseEnter={() => {imageUpdate(0)}}>
              <div className = 'bodyColumnOneTitleContainer'>
                <div className = 'leftTitleContainer'>
                  <b>LLM-Metrics of Discourse Coherence</b>
                </div>

                <div className = 'rightTitleContainer'>
                  <a href = 'https://github.com/Kstar125/discourseCoherenceMetrics' className = 'gitHubLink'><i><b>GitHub</b></i></a>
                </div>
              </div>

              <div className = 'bodyColumnOneTextContainer'>
                <p className = 'languageSubtitles'>Python (Scikit-Learn, Pandas, Numpy, HuggingFace), R.</p>
               
                <p className = 'projectText'>Quantitative coherence metrics formulated from sentence-level embeddings derived from BERT-family LLMs. Metrics benchmark coherent narrative contiuations 5% more <br /> accurately than prior computational approaches. Novel metrics leverage cosine similarities between embeddings and Eucliedan distance metrics (see image on right) to<br /> indicate coherent continuations.</p>
              </div>
            </div>
            
            <div className = 'bodyColumnOneOneContainer' onMouseEnter={() => {imageUpdate(1)}}>
           
              <div className = 'bodyColumnOneTitleContainer'>
                <div className = 'leftTitleContainer'>
                  <b>English & Slavic Languages Cognate Facilitation</b>
                </div>

                <div className = 'rightTitleContainer'>
                  <a href = 'https://github.com/Kstar125/engSlaLexicalDecisionTask' className = 'gitHubLink'><i><b>GitHub</b></i></a>
                </div>
                
              </div>

              <div className = 'bodyColumnOneTextContainer'>
                <p className = 'languageSubtitles'>Firebase, JavaScript (Node.js, React), CSS, HTML.</p>
               
                <p className = 'projectText'>Lexical decision task implemented to collect response times and word identification accuracy using Google Firebase, JavaScript libraries including Node.js and <br /> React. Results collected uphold the cognate facilitation hypothesis between English and Slavic Languages for English-speaking monolinguals.</p>
              </div>
            </div>

            <div className = 'bodyColumnOneOneContainer'  onMouseEnter={() => {imageUpdate(2)}}>
           
              <div className = 'bodyColumnOneTitleContainer'>
                <div className = 'leftTitleContainer'>
                  <b>Statistical Analyses of Hedging as Politeness Strategy</b>
                </div>

                <div className = 'rightTitleContainer'>
                  <a href = 'https://github.com/Kstar125/hedgingAsPolitenessStrategy' className = 'gitHubLink'><i><b>GitHub</b></i></a>
                </div>
                
              </div>

              <div className = 'bodyColumnOneTextContainer'>
                <p className = 'languageSubtitles'>Python (Numpy, Pandas, Spacy, StatsModels).</p>
               
                <p className = 'projectText'>Reddit corpus data pre-processed and analyzed to identify differences in word usage during hedging in conversations between age and gender categories. Logistic <br /> regression implemented through Python statistical libraries indicate significant differences in terms of age and gender.</p>
              </div>
            </div>

            

          </div>

          <div className = 'bodyColumnTwo'>
            <div className = 'secondColumnBufferPortfolio'>
      
             

            </div>
            <div className = "secondColumnPhoto">
              <div className = 'secondColumnPhotoDisplay'>
              <img src = {imageURL} className = 'portfolioPhoto'/>
              </div>
            </div>

            <div className = 'secondColumnBottomPortfolio'>

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

export default Portfolio;