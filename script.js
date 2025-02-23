const corect = document.getElementById("corect_ans");
const false_ans = document.getElementById("false_ans");
const define_ans = document.getElementById("define_ans");
// const corect2 = document.getElementById("corect_ans2");
// const false_ans2 = document.getElementById("false_ans2");
// const define_ans2 = document.getElementById("define_ans2");

const ans_buttons = document.querySelectorAll(".ans_buttons");
// const ans_buttons2= document.querySelectorAll(".ans_buttons2");
corect.style.display = "none";
false_ans.style.display = "none";
define_ans.style.display = "none";
// corect2.style.display = "none";
// false_ans2.style.display = "none";
// define_ans2.style.display = "none";

let score = 0;
function checkTextAnswer() {
const userAnswer = normalizeArabicText(document.getElementById('answerInput').value);
const correctAnswers = ["الكعبة المشرفة", "الكعبة", "بيت الله الحرام"];
const correctTextAnswer = document.getElementById('correctTextAnswer');
const falseTextAnswer = document.getElementById('falseTextAnswer');
const defineTextAnswer = document.getElementById('defineTextAnswer');

const isCorrect = correctAnswers.some(answer => normalizeArabicText(answer) === userAnswer);

if (isCorrect) {
correctTextAnswer.style.display = "block";
falseTextAnswer.style.display = "none";
defineTextAnswer.style.display = "none";
score += 25; 
createConfetti();
localStorage.setItem('textAnswerState', 'correct');
} else {
falseTextAnswer.style.display = "block";
correctTextAnswer.style.display = "none";
defineTextAnswer.style.display = "block";
localStorage.setItem('textAnswerState', 'wrong');
}

updateProgress(); 
localStorage.setItem('score', score); 
}

function normalizeArabicText(text) {
return text
.trim()
.toLowerCase()
.replace(/[\u064B-\u065F]/g, '')
.replace(/[أإآا]/g, 'ا')
.replace(/[ىي]/g, 'ي')
.replace(/ة/g, 'ه');
}
const submit_button = document.getElementById('submit_button');


submit_button.addEventListener('click', function() {
submit_button.disabled = true;
})
window.addEventListener('load', () => {
const answerInput = document.getElementById('answerInput');
const submitButton = document.querySelector('.submit-button');
const correctTextAnswer = document.getElementById('correctTextAnswer');
const falseTextAnswer = document.getElementById('falseTextAnswer');
const defineTextAnswer = document.getElementById('defineTextAnswer');

if (localStorage.getItem('textAnswerSubmitted') === 'true') {
answerInput.disabled = true;
submitButton.disabled = true;

if (localStorage.getItem('textAnswerCorrect') === 'true') {
    correctTextAnswer.style.display = "block";
    falseTextAnswer.style.display = "none";
    defineTextAnswer.style.display = "none";
} else {
    falseTextAnswer.style.display = "block";
    correctTextAnswer.style.display = "none";
    defineTextAnswer.style.display = "block";
}
}
const savedTextAnswer = localStorage.getItem('textAnswerState');
if (savedTextAnswer === 'correct') {
document.getElementById('correctTextAnswer').style.display = 'block';
} else if (savedTextAnswer === 'wrong') {
document.getElementById('falseTextAnswer').style.display = 'block';
document.getElementById('defineTextAnswer').style.display = 'block';
}
});
function resetAllData() {
    document.getElementById('answerInput').value = '';
document.getElementById('correctTextAnswer').style.display = 'none';
document.getElementById('falseTextAnswer').style.display = 'none';
document.getElementById('defineTextAnswer').style.display = 'none';
        localStorage.clear();
        
        score = 0;
        
        const tasks = document.querySelectorAll('.task-card input[type="checkbox"]');
        tasks.forEach(task => {
            task.checked = false;
            task.nextElementSibling.style.animation = "none";
          
        });
        
        const buttons = document.querySelectorAll('.ans_buttons');
        buttons.forEach(button => {
            button.disabled = false;
            
        });
        const submit_button = document.getElementById('submit_button');
        submit_button.disabled = false;
        


        // const buttons2 = document.querySelectorAll('.ans_buttons2');
        // buttons2.forEach(button2 => {
        //     button2.disabled = false;
            
        // });
        
        
        corect.style.display = "none";
        false_ans.style.display = "none";
        define_ans.style.display = "none";
       
       ans_buttons.forEach(button => {
       button.style.backgroundColor = '#8b5e3c';

    
   });
        // corect2.style.display = "none";
        // false_ans2.style.display = "none";
        updateProgress();
        
        removeCelebrationRibbons();
        resetCheckboxA()
        resetTasksH()
        
        // location.reload();
    }

// const resetButton = document.getElementById('resetButton');
// // دالة لإعادة تعيين البيانات

// // حدث النقر على الزر
// resetButton.addEventListener('click', function () {
//     resetAllData();
//     resetButton.style.display = "none"; 
//     localStorage.setItem('resetButtonState', 'hidden');
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const buttonState = localStorage.getItem('resetButtonState');
//     if (buttonState === 'hidden') {
//         resetButton.style.display = "none"; 
//     } else {
//         resetButton.style.display = "block"; 
//     
// });

const resetButton2 = document.getElementById('resetButton2');

resetButton2.addEventListener('click', function () {
    resetAllData(); 
    resetButton2.style.display = "none"; 
    localStorage.setItem('resetButtonState2', 'hidden2');
});
document.addEventListener('DOMContentLoaded', function () {
    const buttonState2 = localStorage.getItem('resetButtonState2');
    if (buttonState2 === 'hidden2') {
        resetButton2.style.display = "none";    
    } else {
        resetButton2.style.display = "block"; 
    }
});


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

    const savedCorrectAnswer = localStorage.getItem('correctAnswer');
    if (savedCorrectAnswer === 'shown') {
        corect.style.display = "block";
        false_ans.style.display = "none";
        define_ans.style.display = "none";
       
    } else if (savedCorrectAnswer === 'wrong') {
        false_ans.style.display = "block";
        corect.style.display = "none";
        define_ans.style.display = "block";
      

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

function checkAnswer(button, status) {
    if (status === 'صح') {
        score += 25;
        corect.style.display = "block";
        false_ans.style.display = "none";
        localStorage.setItem('correctAnswer', 'shown');
        button.style.backgroundColor = '#2E8B57';
        createConfetti();
    } else {
        false_ans.style.display = "block";
        corect.style.display = "none";
        localStorage.setItem('correctAnswer', 'wrong');
        button.style.backgroundColor = '#DC143C';
        define_ans.style.display = "block";

    }
    
    ans_buttons.forEach(btn => {
        btn.disabled = true;
        localStorage.setItem(btn.textContent.trim(), 'clicked');
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

    const buttons = document.querySelectorAll('.ans_buttons');
    buttons.forEach(button => {
        const buttonId = button.textContent.trim();
        const savedButtonState = localStorage.getItem(buttonId);
        if (savedButtonState === 'clicked') {
            button.disabled = true;
            
        }
    });

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

// localStorage.clear()