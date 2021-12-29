const commentForm = document.querySelector("#comment-form");
const username = document.querySelector("#username");
const comment = document.querySelector("#comment");
const comments = document.querySelector("#comments");
commentForm.addEventListener('submit', logSubmit);

function logSubmit(event) {
    const newComment = `
<div class="col-lg-auto">
          <h1 class="display-7 fw-bold lh-5 mb-3">${username.value}</h1>
          <p class="lead">${comment.value}</p>
        </div>
      </div>
`
    event.preventDefault();
    comments.innerHTML += newComment
  }
