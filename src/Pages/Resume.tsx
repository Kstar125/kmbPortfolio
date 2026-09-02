import './Resume.css'
import MenuButton from '../Components/MenuButton';
import EmailLink from '../Components/EmailLink';
import BinaryToggleButton from '../Components/BinaryToggleButton';
import BinaryDownloadButton from '../Components/BinaryDownloadButton';
import DynamicTitle from '../Components/DynamicTitle';
import DynamicText from '../Components/DynamicText'
import { useState } from 'react';


function Resume() {
  let [dynamResumeCVTitleToggle, setDynamResumeCVTitleToggle] = useState(0)

  function toggleDynamicTitle(){
    setDynamResumeCVTitleToggle(dynamResumeCVTitleToggle === 0 ? 1 : 0)
    //console.log(dynamResumeCVTitleToggle)
  }

  function toggleDynamicDownload(){

    const a = document.createElement('a');
  
    if(dynamResumeCVTitleToggle === 0){
      a.href = "/resumeKMB.pdf"
      a.download = "/resumeKMB.pdf"
    }
    
    if(dynamResumeCVTitleToggle === 1){
      a.href = "/cvKMB.pdf";
      a.download = "/cvKMB.pdf"
    }
    // 3. Append to the DOM (required for cross-browser compatibility)
    document.body.appendChild(a);
  
    // 4. Programmatically simulate a click
    a.click();
  
  // 5. Clean up by removing the element from the DOM
    document.body.removeChild(a);


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

          <div className = 'bodyLeft'>

            <div className = 'leftLeftContainer' />

            <div className = 'leftCenterContainer'>
              
              <div className = 'leftCenterTopContainer' />
              
              <div className = 'leftCenterCenterContainer'> 

                <div className = 'dynamBtnFrame' onClick = {() => toggleDynamicTitle()}>

                  <BinaryToggleButton display = {`Display ${dynamResumeCVTitleToggle === 1 ? 'Resumé':'CV'}`} onClick = {() => toggleDynamicTitle()}  />
                
                </div>

              </div>

              <div className = 'leftCenterBottomContainer' />

            </div>
            
            <div className = 'leftRightContainer' />
            
          </div>
              
          <div className = 'bodyCentral'>
            <div className = 'resumeCVTitleBox'>
              <DynamicTitle toggle = {dynamResumeCVTitleToggle} />
            </div>

            <div className = 'resumeCVTextBox'>
              <DynamicText toggle = {dynamResumeCVTitleToggle} />
            </div>
          </div>


          <div className = 'bodyRight'>

            <div className = 'rightLeftContainer' />

            <div className = 'rightCenterContainer'>
              
              <div className = 'rightCenterTopContainer' />
              
              <div className = 'rightCenterCenterContainer'> 

                <div className = 'dynamDownloadBtnFrame' onClick = {() => toggleDynamicDownload()}>

                  <BinaryDownloadButton toggleNum = {dynamResumeCVTitleToggle} />
                
                </div>

              </div>

              <div className = 'rightCenterBottomContainer' />

            </div>
            
            <div className = 'rightRightContainer' />
            
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

export default Resume;