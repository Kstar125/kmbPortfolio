import { type ReactNode } from 'react';

import './DynamicText.css'

interface DynamicTextProps{
    toggle: number;
    children?: ReactNode;

}

function DynamicTitle({toggle}: DynamicTextProps ) {

    
    //let dynamText: string = '';
    
    if(toggle === 0){
        //dynamText = "Resumé";
        return(
            <div className = "resumeBlock">
                <p>Profile</p>
                <p className = "resumeText">University of Toronto Master's graduate who studied artificial intelligence and linguistics. Possess 1+ years of experience building ML data pipelines and using LLMs to deliver insights from structured and unstructured datasets, including as a Lab Manager and through graduate-level studies. Experienced in using machine learning libraries in Python such as TensorFlow and communicating results generated from ML workflow analyses in interdisciplinary settings. Seeking to apply machine learning skills to produce scalable results that match community needs.</p>
                <p>Skills</p>
                <p className = "resumeText">•	Programming: Python, JavaScript, TypeScript, C, R.<br />
                    •   	Artificial Intelligence: Machine Learning, HuggingFace, TensorFlow, TensorBoard, Keras.<br />
                    •	    Database Management, Cloud Computing: Google Firebase, NoSQL.<br />
                    •	    Data Analysis: Pandas, Numpy, Matplotlib, Sklearn, Tidyverse.<br />
                    •	    Professional: Microsoft Office (Excel, PowerPoint), Technical Editing & Writing, Teamwork, Leadership, Project Management, Jira, Google   Gemini. <br />
                </p>
                <p>Education</p>
                <p className = "resumeText">University of Toronto    Sep 2025 - Aug 2026<br/>MA, Linguistics (Computational Linguistics & Artificial Intelligence Focus)<br />
                • Capstone: LLMs & Metrics of Discourse Coherence<br /></p>

                <p className = "resumeText">Unviersity of Toronto    Sep 2020 - Apr 2025<br />BSc (Hons), Psycholinguistics<br />
                </p> 

                <p>Professional Experience</p>
                <p className = "resumeText">Rotman Research Institute, Baycrest, Meltzer Lab    Sep 2023 - May 2024<br />Research Assistant | Lab Manager<br/>
                 •	Applied machine learning, Python, TensorFlow, Keras, pandas, and scikit-learn to implement prototype neural networks, prepare image datasets, and classify images into predefined categories for comparison with human assessments.<br/> 
                 •	Managed research project datasets by working with stakeholders to define, implement, and maintain data pipelines supporting secure end-to-end collection, organization, quality control, and storage of large-scale datasets on organizational servers. 
                </p>

                <p className = "resumeText">Nokia  Jan 2022 - Apr 2022<br />EOV Technical Editor<br />
                •	Strengthened technical communication and analytical skills by working with subject matter experts to edit comprehensive course documents designed to prepare industry customers in areas including network engineering for certification examinations.<br/>
                •	Developed front-end programming and project management skills by working alongside team members and industry stakeholders to develop course modules within industry certifications to familiarize clients with emergent pieces of technology. 
                </p>

                <p>Community & Volunteer Experience</p>
                <p className = "resumeText">College Diabetes Network – University of Toronto Chapter Sep 2020 - Aug 2026<br />Club Advisor | Vice-President | Vice President - Finance | Team Member<br /> 
                • Developed financial planning skills by developing budgets and financial statements to ensure that events received funding, including applications to the University of Toronto Student Union to finance annual club meetings. 
                </p>

                <p className = "resumeText">Rotman Research Institute, Baycrest Aug 2024 - Sep 2024<br/>High-Performance Computing Workshop Facilitator<br /> 
                • Developed leadership skills by instructing research trainees in the fundamental concepts of high performance computing systems offered by the Digital Research Alliance of Canada, including but not limited to data visualization, workload management, and job allocation. </p>
               
                <p>Projects</p>
                <p className = "resumeText">Large Language Models as a Novel Measure of Discourse Coherence <a href = "https://github.com/Kstar125/discourseCoherenceMetrics">GitHub</a> Sep 2025 - Aug 2026<br />
                •	Created LLM embedding-based coherence metrics from large structured and unstructured datasets, evaluating their ability to select semantically coherent narrative continuations on standardized tests and exceeding prior benchmark models by over 5%.<br />
                •	Presented research findings to subject matter experts and interdisciplinary audiences at the 73rd Annual Meeting of the Canadian Linguistics Association (2026). 
                </p>

                <p className = "resumeText">Cognate Facilitation Regarding English and Slavic Languages <a href = "https://github.com/Kstar125/engSlaLexicalDecisionTask">GitHub</a> Sep 2022 - Apr 2023<br />
                •	Used JavaScript, Node.js, React, and R to develop lexical decision modules and analyze data from 108 participants, leading to the presentation of research results at the University of Toronto SULC Conference (2023).<br />
                •	Implemented a data collection pipeline with Google Firebase's real-time database, using a backend-as-a-service model analogous to AWS services. 
                </p>

                <p>Awards & Certifications</p>
                <p className = "resumeText">
                •	University of Toronto Scholar’s Award<br />
                •	University of Toronto Dean’s List<br />
                •	University of Toronto SULC Conference Certificate<br />
                •	CLUE Lab Research Award<br />
                •	AWS SimuLearn: Cloud Computing Essentials (AWS Skill Builder Program)
                </p>


            </div>
        )
    }
    else{
        //dynamText = "CV";

        return(
            <div>
                <div className = "resumeBlock">
                    <p>Education</p>
                    <p className = "resumeText"><b>Master of Arts</b> - Linguistics, University of Toronto 2026<br />• Forum Paper: A Novel Measure of Discourse Coherence in the Era of LLMs<br/>• Advisor: Dr. Shohini Bhattasali</p>
                    <p className = "resumeText"><b>Honours Bachelor of Science</b> - Psycholinguistics, University of Toronto 2025</p>
                    
                    <p>Awards</p>
                    <p className = "resumeText">CLUE Lab Research Award ($1,500) 2026<br /> University of Toronto</p>
                    <p className = "resumeText">Dean's List Scholar 2023<br /> University of Toronto Scarborough</p>
                    <p className = "resumeText">University of Toronto Scholars' Award ($7,500) 2020<br />University of Toronto Scarborough</p>
                    
                    <p>Conference Presentations</p>
                    <p className = "resumeText">“A Novel Measure of Discourse Coherence in the Era of LLMs” The 73rd Annual Meeting of the Canadian Linguistics Association. Calgary, Alberta, June 2026</p>
                    <p className = "resumeText">“Testing the Cognate Facilitation Hypothesis: Do Non-Russian-Speaking Anglophones Recognize Cognates in Russian?” The Scarborough Undergraduate Linguistics Conference. Toronto, Ontario. March 2023</p>

                    <p>Research Experience</p>
                    <p className = "resumeText">Graduate Student Researcher Sept. 2025 - Aug. 2026<br />University of Toronto, Toronto, ON<br/>
                    • Created novel LLM-based coherence metrics to select coherent narrative endings, accurately indicated coherent narrative continuations over incoherent continuations on standardized tests over 5% more frequently than metrics made from prior benchmark models.<br />
                    • Presented research findings to subject matter experts and research specialists at the University of Toronto’s Cognitive Science of Language Research Group and the 73rd Annual Meeting of the Canadian Linguistics Association (2026).
                    </p>

                    <p className = "resumeText">Lab Manager | Research Assistant Sept. 2023 - May 2024<br />Rotman Research Institute, Toronto, ON<br />
                    • Developed teamworking skills to manage the recruitment and onboarding of participants for over 50 MEG, EEG, dTMS, and fMRI study sessions.<br />
                    • Improved teaching skills by creating documentation and teaching lab members how to utilize Compute Canada, Digital Research Alliance of Canada high-performance computing resources.<br />
                    • Developed achine learning and programming skills to collaborate with lab members and implement neural networks, including supervised learning algorithms to classify images, represent feature activations, and test neurological hypotheses.
                    </p>

                    <p className = "resumeText">Undergraduate Researcher Sept. 2022 - March 2023<br /> University of Toronto, Toronto, ON<br/>
                    • Utilized programming skills and Google Firebase, Forms, and JavaScript to develop a lexical decision task software module that collected data from 108 participants, including response time and accuracy for various stimuli to test and supply evidence in favour of cognate facilitation hypotheses in the field of psycholinguistics.<br />
                    • Developed practical research planning skills by formulating testable hypotheses, receiving ethical approval, and working independently to prepare modules for data collection and analysis.<br />
                    • Developed analytical skills by utilizing R programming to prepare data for presentation at the University of Toronto Scarborough Undergraduate Linguistics Conference, see Conference Presentations section.
                    </p>

                    <p>Teaching Experience</p>
                    <p className = "resumeText">Teaching Assistant Sept. 2025 – April 2026<br />Introduction to Language. University of Toronto, Toronto, ON<br />
                    • Developed comprehensive tutorial instruction material for foundational linguistics concepts, in areas including phonology, syntax, semantics, and psycholinguistics.<br />
                    • Instructed students in foundational linguistic concepts in scheduled tutorial sessions over the course of 24 weeks.<br />
                    • Conducted exam invigilation, marking, and assignment marking to assess student comprehension of core linguistic concepts. 
                    </p>

                    <p className = "resumeText">Workshop Facilitator  Aug. 2024 – Sept. 2024<br />Introduction to High-Performance Computing. Rotman Research Institute, Toronto, ON<br/>
                    • Instructed research trainees on how to utilize Compute Canada’s High-Performance Computing systems, including how to open an account, schedule jobs, and utilize clusters and computational resources for research purposes.<br />
                    • Develoepd teaching skills by communicating technical overviews of various computational clusters and interdisciplinary research methodologies.<br />
                    • Improved communication skills related to summarising technical and research-related information in an academic setting to ensure that trainees can effectively learn how to utilize modern research resources.
                    </p>

                    <p>Professional Experience</p>
                    <p className='resumeText'>EOV Technical Editor	Jan. 2022 - April 2022<br/>Nokia, Ottawa, ON<br/>
                    • Improved writing and technical editing skills by working with Subject Matter Experts (SMEs) to edit comprehensive course documents designed to introduce coworkers and colleagues to technical subjects.<br/>
                    • Developed course modules in a fast-paced environment alongside team members to familiarize clients with emergent pieces of technology.<br/>
                    • Developed communication skills by working alongside Subject Matter Experts to ensure technical information was presented effectively for varying audiences, including students, industry partners, and the public.
                    </p>

                    <p className = "resumeText">Marketing Assistant	Sept. 2018 - Feb. 2019<br />Village Media, Sault Ste Marie, ON<br/>
                    • Developed writing skills related to conveying accessible information for a public audience in a town of 70,000 by writing daily weather articles for Village Media SooToday’s “Good Morning” series.<br/>
                    • Improved teamwork skills by collaborating with marketing and sales departments to handle data preparation for article composition.
                    </p>

                    <p>Extracurricular Experience</p>
                    <p className = "resumeText">Club Advisor | Vice-President | VP Finance | Community Member	Sept. 2020 - August 2026<br/>Collage Diabetes Link – University of Toronto Chapter, Toronto, ON<br/>
                    • Developed financial planning skills by developing budgets and financial statements to secure event funding, including applications to the University of Toronto Student Union.<br/>
                    • Leveraged technical editing skills to rewrite constitutional documents to ensure club registration for the 2022 – 2023 year and protection of members’ rights; received approval for the submitted constitution from the University of Toronto Student Union.<br/>
                    • Improved leadership skills by arranging events, such as community meetings, alongside members of the University of Toronto Chapter to maintain engagement with the broader diabetic community.
                    </p>

                    <p>Skills</p>
                    <p className = "resumeText">Programming Languages and Mathematical Packages: MATLAB, R, Python (TensorFlow, NumPy, SciPy), C, JavaScript (Node, React)<br/>
                    • Received technical instruction during my academic experience and practical experience implementing languages such as Python, JavaScript, and R for research purposes.
                    </p>

                    <p className = "resumeText">Neuroimaging Methodologies: MEG, EEG, dTMS, fMRI<br />
                    • Gained practical experience utilizing the methodologies above during employment as a Lab Manager at the Rotman Research Institute.
                    </p>

                    <p>Licenses and Certifications</p>
                    <p className = "resumeText">BrainsWay Deep TMS Operator Certificate - H1 Coil Major Depressive Disorder (MDD) / Anxious Depression<br/>
                    • Issued after receiving training on safe practices regarding dTMS in research involving humans and treatment of MDD and Anxious Depression.
                    </p>

                    <p className = "resumeText">BrainsWay Deep TMS Operator Certificate – H7 Coil Obsessive-Compulsive Disorder (OCD), Major Depressive Disorder (MDD) / Anxious Depression<br/>
                    • Issued after receiving training on safe practices regarding dTMS in research involving humans and treatment of MDD, Anxious Depression, and OCD.
                    </p>

                    <p className = "resumeText">TCPS 2: Core 2022 (Tri-Council Policy Statement: Ethical Conduct for Research Involving Humans)<br/>
                    • Issued after completing training modules related to guidance on research involving human participants and research ethics.
                    </p>

                    <p className = "resumeText">Level 1 MR Safety Certificate 2024<br />
                    • Issued after receiving training on safe practices regarding MRI in research involving humans, allows for use of dedicated research MR systems with direct supervision.
                    </p>

                    <p>Languages Studied</p>
                    <p className = "resumeText">ASL - 2024</p>
                    <p className = "resumeText">Russian - 2021, 2023</p>

                </div>
            </div>
        )
    }
    
    
    }

export default DynamicTitle;