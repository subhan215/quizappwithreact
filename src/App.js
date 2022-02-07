import './App.css';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function App() {
  const questions = [
    {
      num: 1,
      question: "What does html stands for",
      Option: [
         "Hyper text markup link",
         "Hyper turn markup language",
         "Hyper text mongo link",
         "Hyper text markup language",
      ],
      answer: "Hyper text markup language"
    },
    {
      num: 2,
      question: "What is the class name of bootstrap we used in a button ",
      Option: [
         "btn button",
         "btn",
         "button btn",
         "button",
      ],
      answer: "btn"
    },
    {
      num: 3,
      question: "The correct sequence of HTML tags for starting a webpage is",
      Option: [
         "Head, Title, HTML, body",
         "HTML, Body, Title, Head",
         "HTML, Head, Title, Body",
         "HTML, Head, Title, Body",
      ],
      answer: "HTML, Head, Title, Body"
    },
    {
      num: 4,
      question: "Which of the following element is responsible for making the text bold in HTML",
      Option: [
       "pre",
       "b",
         "a",
        "br",
      ],
      answer: "b"
    },
    {
      num: 5,
      question: "Which of the following tag is used for inserting the largest heading in HTML",
      Option: [
         "h1",
         "h0",
         "h5",
         "h6"
      ],
      answer: "h1"
    },
    {
      num: 6,
      question: "Which of the following tag is used to insert a line-break in HTML",
      Option: [
         "b",
         "a",
         "pr",
         "br"
      ],
      answer: "br"
    }, {
      num: 7,
      question: "Which is the 2nd highest paid programming language in the world",
      Option: [
         "Python",
         "C++",
         "Javascript",
         "C Sharp",
      ],
      answer: "Javascript"
    }
  ];
  const [currentQues, setCurrentQues] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showScore, setShowScore] = useState(false)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function checkAns(answerOption) {

    if (answerOption === questions[currentQues].answer) {
      setTotalScore(totalScore + 1);
    }

    const nextQues = currentQues + 1;
    if (nextQues < questions.length) {
      setCurrentQues(nextQues);
    } else {
      setShowScore(true);
    }
  }

  return <div>
    {showScore ? (
      <>
      <div className="resultdiv">
     <Button variant="primary mybtn" onClick={handleShow}>
     Show Results
   </Button>
   </div>
   <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Congratulations!</Modal.Title>
   </Modal.Header>
   <Modal.Body>You have scored <span className='totalscore'>{totalScore}</span > out of <span className='totalques'>{questions.length}</span></Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Close
     </Button>
     
   </Modal.Footer>
 </Modal>
 </>
 ) : (<>
      <div className='maindivparent'>
        <div className='maindiv'>
          <div className='quesdiv'>
            <p>Question {currentQues + 1}   out of {questions.length} </p>
            <p>{questions[currentQues].question} ? </p>
          </div>
          <div className='options'>
            <div className='optdiv1'>
            {questions[currentQues].Option.map((answerOption) => (
							<button onClick={() => checkAns(answerOption)} className="animate__animated animate__backInDown">    {answerOption}</button>
						))}
            
            </div>
          </div>
        </div>
      </div>
    </>)}
  </div>
}

export default App;
