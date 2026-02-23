let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "full-time",
    salary: "$130,000 - $175,000",
    description: "Build cross-platform mobile applications using React Native.",
    status: "all",
  },

  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description: "Create stunning web experiences for high-profile clients.",
    status: "all",
  },

  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $145,000",
    description: "Transform complex data into compelling visualizations.",
    status: "all",
  },

  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description: "Design and maintain scalable backend systems using Python.",
    status: "all",
  },

  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $130,000",
    description:
      "Create beautiful and functional user interfaces for our products.",
    status: "all",
  },

  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks.",
    status: "all",
  },

  {
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    description: "Join our fast-growing startup and work on our core platform.",
    status: "all",
  },

  {
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco",
    type: "Full-time",
    salary: "$150,000 - $180,000",
    description:
      "Expert React and TypeScript developer needed for cutting-edge projects.",
    status: "all",
  },
];

let activeTab = "all";
const jobsContainer = document.getElementById("jobs-container");
const clks = document.getElementById("clks");

function render() {
  const filtered =
    activeTab === "all" ? jobs : jobs.filter((j) => j.status === activeTab);

  document.getElementById("total-cnt").innerText = jobs.length;
  document.getElementById("interview-cnt").innerText = jobs.filter(
    (j) => j.status === "interview",
  ).length;
  document.getElementById("rejected-cnt").innerText = jobs.filter(
    (j) => j.status === "rejected",
  ).length;
  document.getElementById("click-cnt").innerText = filtered.length;

  document
    .getElementById("no-jobs-section")
    .classList.toggle("hidden", filtered.length > 0);
  jobsContainer.innerHTML = "";

  filtered.forEach((job) => {
    const card = document.createElement("div");
    let borderStatus = "border-gray-200";
    let styleStatus = "";
    let btnStatus = "";

    if (job.status === "interview") {
      borderStatus = "border-emerald-200";
      styleStatus = "bg-emerald-500 text-white";
      btnStatus = "INTERVIEW";
    } 
    else if (job.status === "rejected") {
      borderStatus = "border-red-200";
      styleStatus = "bg-red-500 text-white";
      btnStatus = "REJECTED";
    } 
    else {
      styleStatus = "bg-[#EEF4FF] text-[#002C5C] hover:bg-[#e5ecfb]";
      btnStatus = "Not Applied";
    }

    card.className = `card-body bg-base-100 rounded-lg border-2 ${borderStatus} shadow-sm`;

    card.innerHTML = `
        <div class="flex justify-between">
            <div>
                <h3 class="text-[#003366] font-semibold text-[19px] sm:text-[20px] leading-6 pb-[-5px]">
                    ${job.company}
                </h3>
                <h4 class="text-[#64748B] text-[15px] sm:text-[18px] leading-5 pb-[15px]">
                    ${job.position}
                </h4>
            </div>
            <div>
                <button data-id="${job.id}" data-action="delete" class="p-2 rounded-full border-2 border-gray-200 hover:bg-base-300">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
        
        <p class="text-[#64748B] text-[14px] sm:text-[16px] leading-5 pb-[15px]">
            ${job.location} • ${job.type} • ${job.salary}
        </p>

        <div class="pb-[15px]">
            <button class="btn btn-outline btn-xs sm:btn-sm border-none font-medium text-[13px] sm:text-[16px] uppercase ${styleStatus}">
                ${btnStatus}
            </button>
        </div>
        
        <p class="text-[14px] sm:text-[16px] text-[#323B49] leading-[20px] pb-[15px]">
            ${job.description}
        </p>
        
        <div class="flex gap-2">
            <button data-id="${job.id}" data-action="interview" 
                class="btn btn-soft btn-xs sm:btn-sm btn-success border-emerald-500">
                INTERVIEW
            </button>
            <button data-id="${job.id}" data-action="rejected" 
                class="btn btn-soft btn-xs sm:btn-sm  btn-error border-red-500">
                REJECTED
            </button>
        </div>
    `;
    jobsContainer.appendChild(card);
  });
}

if (jobsContainer) {
  jobsContainer.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const id = parseInt(btn.dataset.id);
    const action = btn.dataset.action;

    if (action === "delete") {
      jobs = jobs.filter((j) => j.id !== id);
    } 
    else if (action === "interview" || action === "rejected") {
      const found = jobs.find((j) => j.id === id);
      if (found) found.status = action;
    }
    render();
  });
}

if (clks) {
  clks.addEventListener("click", (e) => {
    const tabBtn = e.target.closest(".available-job-btn");
    if (!tabBtn) return;

    // document
    //   .querySelectorAll(".available-job-btn")
    //   .forEach((btn) => t.classList.remove("btn-active"));
    // tabBtn.classList.add("btn-active");

    document.querySelectorAll(".available-job-btn").forEach((btn) => {
      if (btn === tabBtn) {
        btn.classList.add("bg-[#3B82F6]", "text-[#FFFFFF]");
        btn.classList.remove("text-[#64748B]", "bg-[#FFFFFF]");
      } 
      else {
        btn.classList.remove("bg-[#3B82F6]", "text-[#FFFFFF]");
        btn.classList.add("text-[#64748B]", "bg-[#FFFFFF]");
      }
    });

    activeTab = tabBtn.dataset.tab;

    render();
  });
}

render();
