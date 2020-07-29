const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards){
  card.addEventListener("click", function(){
    const videoId = card.getAttribute("id");
    modalOverlay.classList.add("active")
    modalOverlay.querySelector("iframe").href = `https://www.youtube.com/embed/${videoId}`
  })
}

document.querySelector(".close-modal").addEventListener.add("click", function(){
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").href = ""
})

