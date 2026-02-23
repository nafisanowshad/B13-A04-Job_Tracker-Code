let interviewList = [];
let rejectedList = [];

let total = document.getElementById("dashboard-total");
let interviewCnt = document.getElementById("dashboard-interview");
let rejectedCnt = document.getElementById("dashboard-rejected");

const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const allCardSection = document.getElementById("allCards");
// console.log(allCardSection.children.length);

// interviewList.push({Title:'job 1'});

const mainContainer = document.querySelector("main");
// console.log(mainContainer);

function calculateCnt() {
  total.innerText = allCardSection.children.length;

  interviewCnt.innerText = interviewList.length;
  rejectedCnt.innerText = rejectedList.length;
}
calculateCnt();

function toggling(id) {
  //   console.log("click", id);
  allBtn.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]");

  allBtn.classList.add("bg-base-100", "text-[#64748B]");
  interviewBtn.classList.add("bg-base-100", "text-[#64748B]");
  rejectedBtn.classList.add("bg-base-100", "text-[#64748B]");

  //   console.log(id);
  const selected = document.getElementById(id);
  //   console.log(selected);

  selected.classList.add("bg-[#3B82F6]", "text-[#FFFFFF]");
}

mainContainer.addEventListener("click", function (event) {
    // console.log(event.target.parentNode.parentNode);
  const parenNode = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
  const card1Title = parenNode.querySelector(".card1-title").innerText;
  const card1Position = parenNode.querySelector(".card1-position").innerText;
  const card1Location = parenNode.querySelector(".card1-location").innerText;
  const card1Description =
    parenNode.querySelector(".card1-description").innerText;
    // console.log(card1Title);

  const card1Info = {
    card1Title,
    card1Position,
    card1Location,
    card1Description,
  }

//   console.log(card1Info);
});
