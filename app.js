const questionItems = document.querySelectorAll('.faq__question');
const flyingCube = document.querySelector('.image__cube');

questionItems.forEach((question) => {
  question.addEventListener('click', (e) => {
    if (e.target === question) {
      const answer = question.nextElementSibling;
      const lastAnswer = document.querySelector('.faq__answer.show__answer');
      if (lastAnswer && lastAnswer !== answer) {
        lastAnswer.classList.remove('show__answer');
        lastAnswer.previousElementSibling.classList.remove('active__question');
        setTimeout(() => {
          toggleAnswer(answer);
        }, 500);
      } else {
        toggleAnswer(answer);
      }
      question.classList.toggle('active__question');
    }
  });

  question.addEventListener('mouseenter', (e) => {
    flyingCube.classList.add('move__cube');
  });

  question.addEventListener('mouseleave', (e) => {
    flyingCube.classList.remove('move__cube');
  });
});

function toggleAnswer(answer) {
  answer.classList.toggle('show__answer');
}
