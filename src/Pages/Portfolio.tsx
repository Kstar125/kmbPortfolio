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
               
                <p className = 'projectText'>This project introduces new LLM-based metrics that researchers can use to quantify the coherence of text documents. The novel LLM-based metrics indicate coherent narrative continuations over relatively incoherent continuations 5% more accurately than prior computational approaches. These metrics leverage cosine similarities between embeddings and Euclidean distance metrics to indicate coherent continuations.</p>
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
               
                <p className = 'projectText'>This project introduces novel findings upholding the Cognate Facilitation Hypothesis between English and Russian for English-speaking monolinguals. In this project, Google Firebase and JavaScript libraries were used to implement a lexical decision task, collecting response time and word identification accuracy data.</p>
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
                <p className = 'languageSubtitles'>Python (NumPy, Pandas, Spacy, StatsModels).</p>
               
                <p className = 'projectText'>This project uses Reddit text corpus data and identifies statistically significant differences in the usage of hedging words between speakers of different ages and genders. In this project, Python libraries including spaCy, Pandas, and NumPy were used to pre-process text data. Logistic regression analyses were then implemented using StatsModels.</p>
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
                  <img src = "/github.webp" className = 'githubLogo' />
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
                  <img src = "/linkedin.png" className = 'linkedinLogo' />
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

