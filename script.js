// const corect = document.getElementById("corect_ans");
// const false_ans = document.getElementById("false_ans");
// const define_ans = document.getElementById("define_ans");
const corectR = document.getElementById("corect_ansR");
const false_ansR = document.getElementById("false_ansR");
const define_ansR = document.getElementById("define_ansR");
// const p3 = document.getElementById("p3");
// const hent_btn = document.getElementById("hent_btn");
// const corect2 = document.getElementById("corect_ans2");
// const false_ans2 = document.getElementById("false_ans2");
// const define_ans2 = document.getElementById("define_ans2");
// const question_card_hedden = document.getElementById("question_card_hedden");

// const ans_buttons = document.querySelectorAll(".ans_buttons");
const ans_buttonsR = document.querySelectorAll(".ans_buttonsR");
// const ans_buttons2= document.querySelectorAll(".ans_buttons2");
// corect.style.display = "none";
// false_ans.style.display = "none";
// define_ans.style.display = "none";
corectR.style.display = "none";
false_ansR.style.display = "none";
define_ansR.style.display = "none";
// p3.style.display = "none";
//     hent_btn.addEventListener("click",function(){
//         p3.style.display = "block";
            
//         })


// let x = document.querySelector('.question-card')

// x.remove()

// corect2.style.display = "none";
// false_ans2.style.display = "none";
// define_ans2.style.display = "none";
// const isHidden = localStorage.getItem('question_card_hedden_hidden');

// if (isHidden === 'true') {
//     question_card_hedden.style.display = 'block';
// } else {
//     question_card_hedden.style.display = 'none';
    
//     setTimeout(() => {
//         question_card_hedden.style.display = 'block';
//         localStorage.setItem('question_card_hedden_hidden', 'true');
//     }, 6000);
// }



let score = 0;
// function checkTextAnswer() {
// const userAnswer = normalizeArabicText(document.getElementById('answerInput').value);
// const correctAnswers = ["العسل"];
// const correctTextAnswer = document.getElementById('correctTextAnswer');
// const falseTextAnswer = document.getElementById('falseTextAnswer');
// const defineTextAnswer = document.getElementById('defineTextAnswer');

// const isCorrect = correctAnswers.some(answer => normalizeArabicText(answer) === userAnswer);

// if (isCorrect) {
// correctTextAnswer.style.display = "block";
// falseTextAnswer.style.display = "none";
// defineTextAnswer.style.display = "none";
// score += 25; 
// createConfetti();
// localStorage.setItem('textAnswerState', 'correct');
// } else {
// falseTextAnswer.style.display = "block";
// correctTextAnswer.style.display = "none";
// defineTextAnswer.style.display = "block";
// localStorage.setItem('textAnswerState', 'wrong');
// }

// updateProgress(); 
// localStorage.setItem('score', score); 
// }

// function normalizeArabicText(text) {
// return text
// .trim()
// .toLowerCase()
// .replace(/[\u064B-\u065F]/g, '')
// .replace(/[أإآا]/g, 'ا')
// .replace(/[ىي]/g, 'ي')
// .replace(/ة/g, 'ه');
// }
// const submit_button = document.getElementById('submit_button');


// submit_button.addEventListener('click', function() {
// submit_button.disabled = true;
// })
// window.addEventListener('load', () => {
// const answerInput = document.getElementById('answerInput');
// const submitButton = document.querySelector('.submit-button');
// const correctTextAnswer = document.getElementById('correctTextAnswer');
// const falseTextAnswer = document.getElementById('falseTextAnswer');
// const defineTextAnswer = document.getElementById('defineTextAnswer');

// if (localStorage.getItem('textAnswerSubmitted') === 'true') {
// answerInput.disabled = true;
// submitButton.disabled = true;

// if (localStorage.getItem('textAnswerCorrect') === 'true') {
//     correctTextAnswer.style.display = "block";
//     falseTextAnswer.style.display = "none";
//     defineTextAnswer.style.display = "none";
// } else {
//     falseTextAnswer.style.display = "block";
//     correctTextAnswer.style.display = "none";
//     defineTextAnswer.style.display = "block";
// }
// }
// const savedTextAnswer = localStorage.getItem('textAnswerState');
// if (savedTextAnswer === 'correct') {
// document.getElementById('correctTextAnswer').style.display = 'block';
// } else if (savedTextAnswer === 'wrong') {
// document.getElementById('falseTextAnswer').style.display = 'block';
// document.getElementById('defineTextAnswer').style.display = 'block';
// }
// });
function resetAllData() {
//     document.getElementById('answerInput').value = '';
// document.getElementById('correctTextAnswer').style.display = 'none';
// document.getElementById('falseTextAnswer').style.display = 'none';
// document.getElementById('defineTextAnswer').style.display = 'none';
        
        score = 0;
// p3.style.display = "none";
        
        const tasks = document.querySelectorAll('.task-card input[type="checkbox"]');
        tasks.forEach(task => {
            task.checked = false;
            task.nextElementSibling.style.animation = "none";
          
        });
        
        // const buttons = document.querySelectorAll('.ans_buttons');
        // buttons.forEach(button => {
        //     button.disabled = false;
            
        // });
        const buttonsR = document.querySelectorAll('.ans_buttonsR');
        buttonsR.forEach(buttonR => {
            buttonR.disabled = false;
            
        });
        // const submit_button = document.getElementById('submit_button');
        // submit_button.disabled = false;
        


        // const buttons2 = document.querySelectorAll('.ans_buttons2');
        // buttons2.forEach(button2 => {
        //     button2.disabled = false;
            
        // });
        
        
        // corect.style.display = "none";
        // false_ans.style.display = "none";
        // define_ans.style.display = "none";
        corectR.style.display = "none";
        false_ansR.style.display = "none";
        define_ansR.style.display = "none";
       
       ans_buttonsR.forEach(buttonR => {
       buttonR.style.backgroundColor = '#8b5e3c';

   });
//    ans_buttons2.forEach(button2 => {
//     button2.style.backgroundColor = '#8b5e3c';

// });
//         corect2.style.display = "none";
//         false_ans2.style.display = "none";
//         define_ans2.style.display = "none";

        updateProgress();
        
        removeCelebrationRibbons();
        resetCheckboxA()
        resetTasksH()
        
        // location.reload();
        localStorage.clear();

    }

const resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function () {
    resetAllData();
    resetButton.style.display = "none"; 
    localStorage.setItem('resetButtonState', 'hidden');
});
document.addEventListener('DOMContentLoaded', function () {
    const buttonState = localStorage.getItem('resetButtonState');
    if (buttonState === 'hidden') {
        resetButton.style.display = "none"; 
    } else {
        resetButton.style.display = "block"; 
    }
});

// const resetButton2 = document.getElementById('resetButton2');

// resetButton2.addEventListener('click', function () {
//     resetAllData(); 
//     resetButton2.style.display = "none"; 
//     localStorage.setItem('resetButtonState2', 'hidden2');
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const buttonState2 = localStorage.getItem('resetButtonState2');
//     if (buttonState2 === 'hidden2') {
//         resetButton2.style.display = "none";    
//     } else {
//         resetButton2.style.display = "block"; 
//     }
// });

window.addEventListener('load', () => {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
        score = parseInt(savedScore);
        updateProgress();
    }

    const tasks = document.querySelectorAll('.task-card input[type="checkbox"]');
    tasks.forEach(task => {
        const taskId = task.id;
        const savedTaskState = localStorage.getItem(taskId);
        if (savedTaskState === 'true') {
            task.checked = true;
            task.nextElementSibling.style.animation = "taskComplete 0.5s ease-out forwards";
        }
    });
   

    // const buttons2 = document.querySelectorAll('.ans_buttons2');
    // buttons2.forEach(button2 => {
    //     const buttonId2 = button2.textContent.trim();
    //     const savedButtonState2 = localStorage.getItem(buttonId2);
    //     if (savedButtonState2 === 'clicked') {
    //         button2.disabled = true;
    //     }
    // });

    // const savedCorrectAnswer = localStorage.getItem('correctAnswer');
    // if (savedCorrectAnswer === 'shown') {
    //     corect.style.display = "block";
    //     false_ans.style.display = "none";
    //     define_ans.style.display = "none";
       
    // } else if (savedCorrectAnswer === 'wrong') {
    //     false_ans.style.display = "block";
    //     corect.style.display = "none";
    //     define_ans.style.display = "block";
    // }

    const savedCorrectAnswerR = localStorage.getItem('correctAnswerR');
    if (savedCorrectAnswerR === 'shownR') {
        corectR.style.display = "block";
        false_ansR.style.display = "none";
        define_ansR.style.display = "none";
       
    } else if (savedCorrectAnswerR === 'wrong') {
        false_ansR.style.display = "block";
        corectR.style.display = "none";
        define_ansR.style.display = "block";
      

    }

//     const savedCorrectAnswer2 = localStorage.getItem('correctAnswer2');
//     if (savedCorrectAnswer2 === 'shown2') {
       
//         corect2.style.display = "block";
//         false_ans2.style.display = "none";
//         define_ans2.style.display = "none";
//     } else if (savedCorrectAnswer2 === 'wrong2') {
        
//         false_ans2.style.display = "block";
//         corect2.style.display = "none";
//         define_ans2.style.display = "block";

//     }
});

// function checkAnswer(button, status) {
//     if (status === 'صح') {
//         score += 25;
//         corect.style.display = "block";
//         false_ans.style.display = "none";
//         localStorage.setItem('correctAnswer', 'shown');
//         button.style.backgroundColor = '#2E8B57';
//         createConfetti();
//     } else {
//         false_ans.style.display = "block";
//         corect.style.display = "none";
//         localStorage.setItem('correctAnswer', 'wrong');
//         button.style.backgroundColor = '#DC143C';
//         define_ans.style.display = "block";

//     }
    
//     ans_buttons.forEach(btn => {
//         btn.disabled = true;
//         localStorage.setItem(btn.textContent.trim(), 'clicked');
//     });
    
//     updateProgress();
//     localStorage.setItem('score', score);
// }
function checkAnswerR(buttonR, statusR) {
    if (statusR === 'صح') {
        score += 25;
        corectR.style.display = "block";
        false_ansR.style.display = "none";
        localStorage.setItem('correctAnswerR', 'shownR');
        buttonR.style.backgroundColor = '#2E8B57';
        createConfetti();
    } else {
        false_ansR.style.display = "block";
        corectR.style.display = "none";
        localStorage.setItem('correctAnswerR', 'wrongR');
        buttonR.style.backgroundColor = '#DC143C';
        define_ansR.style.display = "block";

    }
    
    ans_buttonsR.forEach(btnR => {
        btnR.disabled = true;
        localStorage.setItem(btnR.textContent.trim(), 'clicked');
    });
    
    updateProgress();
    localStorage.setItem('score', score);
}
// function checkAnswer2(button2, status2) {
//     if (status2 === 'صح') {
//         score += 25;
        
//         corect2.style.display = "block";
//         false_ans2.style.display = "none";
//         localStorage.setItem('correctAnswer2', 'shown2');
//         button2.style.backgroundColor = '#2E8B57';
//         createConfetti();
//     } else {
        
//         false_ans2.style.display = "block";
//         corect2.style.display = "none";
//         localStorage.setItem('correctAnswer2', 'wrong2');
//         button2.style.backgroundColor = '#DC143C';
//         define_ans2.style.display = "block";

//     }
    
//     ans_buttons2.forEach(btn2 => {
//         btn2.disabled = true;
//         localStorage.setItem(btn2.textContent.trim(), 'clicked');
//     });
    
//     updateProgress();
//     localStorage.setItem('score', score);
// }

function updateScore(points) {
    score += points;
    localStorage.setItem('score', score);
    updateProgress();
}

function updateProgress() {
    const progress = document.getElementById('progress');
    const pointsDisplay = document.getElementById('points');
    let percentage = Math.min(score, 100);
    
    progress.style.width = percentage + '%';
    progress.innerText = Math.round(percentage) + '%';
    let pointsEarned = (percentage / 100 * 5).toFixed(1);
   
    pointsDisplay.innerText = pointsEarned + ' نقطة من 5 نقاط';

    if (percentage === 100) {
        progress.classList.add('completed');
        progress.style.animation = "pulse 2s infinite";
        createCelebrationRibbons();
    } else {
        progress.classList.remove('completed');
        removeCelebrationRibbons();
    }
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

function createCelebrationRibbons() {
    removeCelebrationRibbons();
    
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const ribbon = document.createElement('div');
        ribbon.className = 'celebration-ribbon';
        ribbon.style.left = `${Math.random() * 100}%`;
        ribbon.style.animationDelay = `${Math.random() * 2}s`;
        ribbon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        const wave = document.createElement('div');
        wave.className = 'ribbon-wave';
        ribbon.appendChild(wave);
        
        container.appendChild(ribbon);
    }
}

function removeCelebrationRibbons() {
    const ribbons = document.querySelectorAll('.celebration-ribbon');
    ribbons.forEach(ribbon => ribbon.remove());
}

const tasks = document.querySelectorAll('.task-card input[type="checkbox"]');
tasks.forEach(task => {
    task.addEventListener('change', function() {
        localStorage.setItem(this.id, this.checked);
        
        if (this.checked) {
            this.nextElementSibling.style.animation = "taskComplete 0.5s ease-out forwards";
        } else {
            this.nextElementSibling.style.animation = "none";
            score -= 10;
            localStorage.setItem('score', score);
            updateProgress();
        }
    });
});
const taskCards = document.querySelectorAll('.task-card');

window.addEventListener('load', () => {
taskCards.forEach(card => {
const cardId = card.id; 
const savedOpacity = localStorage.getItem(cardId);
if (savedOpacity) {
    card.style.opacity = savedOpacity; 
}
});
});

taskCards.forEach(card => {
card.addEventListener('click', function () {
const cardId = card.id; 
card.style.opacity = "16%"; 
localStorage.setItem(cardId, "16%"); 
});
});

const checkboxes = document.querySelectorAll(".checkboxs");
// window.addEventListener('load', () => {
//             const buttonState = localStorage.getItem('resetButtonState');
//             if (buttonState === 'none') {
//                 resetButton.style.display = 'none';
//             }
//         });

//         resetButton.addEventListener('click', () => {
//             resetButton.style.display = 'block';
//             localStorage.setItem('resetButtonState', 'block');
    
//             setTimeout(() => {
//                 resetButton.style.display = 'none';
//                 localStorage.setItem('resetButtonState', 'none');
//             }, 5000);
//         });

window.addEventListener('load', () => {
checkboxes.forEach(checkbox => {
const checkboxId = checkbox.id; 
const savedState = localStorage.getItem(checkboxId);
if (savedState === 'checked') {
    checkbox.checked = true;
    checkbox.disabled = true; 
}
});
});

checkboxes.forEach(checkbox => {
checkbox.addEventListener('change', function () {
const checkboxId = checkbox.id; 
if (this.checked) {
    checkbox.disabled = true; 
    localStorage.setItem(checkboxId, 'checked'); 
}
});
});

    // const buttons = document.querySelectorAll('.ans_buttons');
    // buttons.forEach(button => {
    //     const buttonId = button.textContent.trim();
    //     const savedButtonState = localStorage.getItem(buttonId);
    //     if (savedButtonState === 'clicked') {
    //         button.disabled = true;
            
    //     }
    // });

    const buttonsR = document.querySelectorAll('.ans_buttonsR');
    buttonsR.forEach(buttonR => {
        const buttonIdR = buttonR.textContent.trim();
        const savedButtonStateR = localStorage.getItem(buttonIdR);
        if (savedButtonStateR === 'clicked') {
            buttonR.disabled = true;
            
        }
    });

    // const buttons2 = document.querySelectorAll('.ans_buttons2');
    // buttons2.forEach(button2 => {
    //     const buttonId2 = button2.textContent.trim();
    //     const savedButtonState2 = localStorage.getItem(buttonId2);
    //     if (savedButtonState2 === 'clicked') {
    //         button2.disabled = true;
            
    //     }
    // });

    const checkboxess = document.querySelectorAll('input[type="checkbox"]');
window.addEventListener('load', () => {
checkboxess.forEach(checkbox => {
const checkboxId = checkbox.id;
const savedState = localStorage.getItem(checkboxId);
if (savedState === 'checked') {
    checkbox.checked = true;
    checkbox.style.backgroundColor = "#8b5e3c";
    checkbox.style.borderColor = "#8b5e3c";
}
});
});

checkboxess.forEach(checkbox => {
checkbox.addEventListener('change', function () {
const checkboxId = checkbox.id;
if (this.checked) {
    this.style.backgroundColor = "#8b5e3c";
    this.style.borderColor = "#8b5e3c";
    localStorage.setItem(checkboxId, 'checked');
} else {
    this.style.backgroundColor = "";
    this.style.borderColor = "";
    localStorage.removeItem(checkboxId);
}
});
});

function resetCheckboxA(){
const checkboxess = document.querySelectorAll('input[type="checkbox"]');
checkboxess.forEach(checkbox => {

    checkbox.style.backgroundColor = "#fdf3e7";
    checkbox.style.borderColor = "#8b5e3c";
}
);
checkboxes.forEach(checkbox => {


    checkbox.disabled = false; 

});
}

function resetTasksH(){
const taskCards = document.querySelectorAll('.task-card');
taskCards.forEach(card => {
card.style.opacity = "100%"; 
});
}

const hijriDateElement = document.getElementById('hijri-date');
const hijriDateHeader = document.getElementById('hijri-date-header');
const today = new Date();

today.setDate(today.getDate());

const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}).format(today);

hijriDateHeader.textContent = hijriDate;

hijriDateElement.textContent = hijriDate;
 
// setTimeout(() => {
//     submit_button.disabled = true;
//     const defineTextAnswer = document.getElementById('defineTextAnswer');
//     defineTextAnswer.style.display = "block"

//     localStorage.setItem('submit_button', 'true');
//     localStorage.setItem('defineTextAnswer', 'block');
// }, 25000);

// window.addEventListener('load', () => {
// const   submit_button =   localStorage.getItem('submit_button', 'true');
// const   defineTextAnswer =  localStorage.getItem('defineTextAnswer', 'block');
    

//     if (submit_button === 'true') {
//         submit_button.disabled = true;
        
//     }

//     if (defineTextAnswer === 'block') {
//        const defineTextAnswer = document.getElementById('defineTextAnswer');
//         defineTextAnswer.style.display = "block"
//     }
// });

 


// setTimeout(() => {
//     const buttons2 = document.querySelectorAll('.ans_buttons2');
//     buttons2.forEach(button2 => {
//         button2.disabled = true;
//     });
//     define_ans2.style.display = 'block';

//     localStorage.setItem('buttonsDisabled2', 'true');
//     localStorage.setItem('defineAnsDisplay2', 'block');
// }, 25000);

// window.addEventListener('load', () => {
//     const buttonsDisabled2 = localStorage.getItem('buttonsDisabled2');
//     const defineAnsDisplay2 = localStorage.getItem('defineAnsDisplay2');

//     if (buttonsDisabled2 === 'true') {
//         const buttons2 = document.querySelectorAll('.ans_buttons2');
//         buttons2.forEach(button2 => {
//             button2.disabled = true;
//         });
//     }

//     if (defineAnsDisplay2 === 'block') {
//         define_ans2.style.display = 'block';
//     }
// });

 


//   setTimeout(() => {
//     const buttons = document.querySelectorAll('.ans_buttons');
//     buttons.forEach(button => {
//         button.disabled = true;
//     });
//     define_ans.style.display = 'block';

//     localStorage.setItem('buttonsDisabled', 'true');
//     localStorage.setItem('defineAnsDisplay', 'block');
// }, 25000);

// window.addEventListener('load', () => {
//     const buttonsDisabled = localStorage.getItem('buttonsDisabled');
//     const defineAnsDisplay = localStorage.getItem('defineAnsDisplay');

//     if (buttonsDisabled === 'true') {
//         const buttons = document.querySelectorAll('.ans_buttons');
//         buttons.forEach(button => {
//             button.disabled = true;
//         });
//     }

//     if (defineAnsDisplay === 'block') {
//         define_ans.style.display = 'block';
//     }
// });
// setTimeout(() => {
//     const buttonsR = document.querySelectorAll('.ans_buttonsR');
//     buttonsR.forEach(buttonR => {
//         buttonR.disabled = true;
//     });
//     define_ansR.style.display = 'block';

//     localStorage.setItem('buttonsDisabledR', 'true');
//     localStorage.setItem('defineAnsDisplayR', 'block');
// }, 25000);

// window.addEventListener('load', () => {
//     const buttonsDisabledR = localStorage.getItem('buttonsDisabledR');
//     const defineAnsDisplayR = localStorage.getItem('defineAnsDisplayR');

//     if (buttonsDisabledR === 'true') {
//         const buttonsR = document.querySelectorAll('.ans_buttonsR');
//         buttonsR.forEach(buttonR => {
//             buttonR.disabled = true;
//         });
//     }

//     if (defineAnsDisplayR === 'block') {
//         define_ansR.style.display = 'block';
//     }
// });


window.addEventListener('load', () => {
    let seconds = 25; 
    const countdownElement = document.getElementById('countdown');

    const countdownFunction = setInterval(() => {
        seconds--;
        countdownElement.textContent = seconds; 

        if (seconds <= 0) {
            clearInterval(countdownFunction);
            countdownElement.textContent = "خلصنا"; 
        }
    }, 1000); 
});
