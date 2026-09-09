import RetrieveTextOne from './retrieveTextOne';
import RetrieveTextTwo from './retrieveTextTwo';
import '../Pages/Home.css'


function EmailLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    let firstHalf = '';
    firstHalf = RetrieveTextOne;

    
    let secondHalf = '';
    secondHalf = RetrieveTextTwo;

    e.currentTarget.href = "mailto:" + firstHalf + secondHalf;
  };

  return (
    <a href="mailto:Korey Miller-Boyle" onClick={handleClick}>
        <img src = "/email.webp" className = 'emailLogo' />
    </a>
  );
}

export default EmailLink;