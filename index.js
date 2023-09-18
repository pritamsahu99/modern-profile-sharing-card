const countNum = document.getElementById('countNum');
 
const decrement = () => {
  let value = parseInt(countNum.innerText);
  value--;
  countNum.innerText = value;
}

const increment = () => {
  let value = parseInt(countNum.innerText);
  value++;
  countNum.innerText = value;
}


// For Profile Share Card
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

// Modal open function
const openModal = () => {
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
}

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
}