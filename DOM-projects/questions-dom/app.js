
// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//  btn.addEventListener('click',function(e){
//   const question = e.currentTarget.parentElement.parentElement;
//   question.classList.toggle('show-text');
//  })
// })


//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
 question.addEventListener('click',function(){
  question.classList.toggle("show-text");
  //hide question when clicking another btn
   questions.forEach(function(item){
    if(item !== question){
     item.classList.remove("show-text");
    }
  })
 })
})