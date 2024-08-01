// NOTE most of the "front end" is querying a basic data structure called departmentAssets below. To edit content from the interface, start by reviewing that

// select inputs on form
const nameElement = document.querySelector("#nameInput");
const titleElement = document.querySelector("#titleInput");
const emailElement = document.querySelector("#emailInput");
const phoneElement = document.querySelector("#phoneInput");
const cellElement = document.querySelector("#cellInput");
const orgElement = document.querySelector("#orgInput");

// select submits button on form
// const btnElement = document.querySelector("#createBtn"); <- hidden didn't use
let sunIcon = document.querySelector(".sun-icon");
let moonIcon = document.querySelector(".moon-icon");
let toggleMode = document.querySelector(".toggle-container");

// select displayed content on page -
const nameDisplay = document.querySelector("#namePlate");
const titleDisplay = document.querySelector("#titlePlate");
const fsuDisplay = document.querySelector("#fsuPlate");
const orgNameDisplay = document.querySelector("#orgNamePlate");
const emailDisplay = document.querySelector("#emailPlate");
const phoneDisplay = document.querySelector("#phonePlate");
const cellDisplay = document.querySelector("#cellPlate");
const websiteDisplay = document.querySelector("#webPlate");
const linktreeDisplay = document.querySelector("#linktreePlate");
const orgDisplay = document.querySelector("#orgPlate");
const displayBackground = document.querySelector(".displaySignature");

// toggle sun and moon

toggleMode.addEventListener("click", function () {
  displayBackground.classList.toggle("dark-mode");
  displayBackground.classList.toggle("dark-link");
  moonIcon.classList.toggle("moon-blue");
  sunIcon.classList.toggle("sun-gold");
});

// array of objects to add linktree, department lockup, website together
departmentAssets = [
  {
    nameDefault: "Florida State University",
    name: "",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/FSU%20Florida%20State%20University%20signature%20alt.png",
    linktree: "https://www.fsu.edu/socialmedia",
    website: "https://fsu.edu/",
    selected: true,
  },
  {
    name: "College of Arts and Sciences",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/College%20of%20Arts%20and%20Sciences%20signature%20alt.png",
    linktree: "https://linktr.ee/fsuartssciences",
    website: "https://artsandsciences.fsu.edu/",
  },
  {
    name: "Air Force ROTC",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Air%20Force%20ROTC%20signature.png",
    linktree: "https://linktr.ee/detachment145afrotc",
    website: "https://airforcerotc.fsu.edu/",
  },
  {
    name: "Army ROTC",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Army%20ROTC%20signature.png",
    linktree: "https://linktr.ee/fsuarmyrotc",
    website: "https://armyrotc.fsu.edu/",
  },
  {
    name: "Department of Anthropology",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Anthropology%20signature.png",
    linktree: "https://linktr.ee/fsuanthropology",
    website: "https://anthro.fsu.edu/",
  },
  {
    name: "Department of Biological Science",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Biological%20Science%20signature%20alt.png",
    linktree: "https://linktr.ee/fsubiology",
    website: "https://www.bio.fsu.edu/",
  },
  {
    name: "Department of Chemistry and Biochemistry",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Chemistry%20Biochemistry%20signature%20alt.png",
    linktree: "https://linktr.ee/fsuchemistry",
    website: "https://www.chem.fsu.edu/",
  },
  {
    name: "Department of Classics",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Classics%20signature.png",
    linktree: "https://linktr.ee/fsuclassics",
    website: "https://classics.fsu.edu/",
  },
  {
    name: "Department of Computer Science",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Computer%20Science%20signature.png",
    linktree: "https://linktr.ee/fsucomputerscience",
    website: "https://www.cs.fsu.edu/",
  },
  {
    name: "Department of Earth, Ocean, and Atmospheric Science",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Earth%20Ocean%20and%20Atmospheric%20Science%20signature.png",
    linktree: "https://linktr.ee/fsueoas",
    website: "https://eoas.fsu.edu/",
  },
  {
    name: "Department of English",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/English%20signature.png",
    linktree: "https://linktr.ee/fsuenglish",
    website: "https://english.fsu.edu/",
  },
  {
    name: "Department of History",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/History%20signature.png",
    linktree: "https://linktr.ee/fsuhistory",
    website: "https://history.fsu.edu/",
  },
  {
    name: "Department of Mathematics",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Mathematics%20signature.png",
    linktree: "https://linktr.ee/fsumathematics",
    website: "https://www.math.fsu.edu/",
  },
  {
    name: "Department of Modern Languages and Linguistics",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Modern%20Languages%20and%20Linguistics%20signature.png",
    linktree: "https://linktr.ee/fsumodern",
    website: "https://modlang.fsu.edu/",
  },
  {
    name: "Department of Philosophy",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Philosophy%20signature.png",
    linktree: "https://linktr.ee/fsuphilosophy",
    website: "https://philosophy.fsu.edu/",
  },
  {
    name: "Department of Physics",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Physics%20signature.png",
    linktree: "https://linktr.ee/fsuphysics",
    website: "https://physics.fsu.edu/",
  },
  {
    name: "Department of Psychology",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Psychology%20signature.png",
    linktree: "https://linktr.ee/fsupsychology",
    website: "https://psychology.fsu.edu/",
  },
  {
    name: "Department of Religion",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Religion%20signature.png",
    linktree: "https://linktr.ee/fsureligion",
    website: "https://religion.fsu.edu/",
  },
  {
    name: "Department of Scientific Computing",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Scientific%20Computing%20signature.png",
    linktree: "https://linktr.ee/fsuscicomp",
    website: "https://www.sc.fsu.edu/",
  },
  {
    name: "Department of Statistics",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Statistics%20signature.png",
    linktree: "https://linktr.ee/fsustatistics",
    website: "https://stat.fsu.edu/",
  },
  {
    name: "Center for Ocean-Atmospheric Prediction Studies",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Center%20for%20Ocean-Atmospheric%20Prediction%20Studies%20signature%20alt.png",
    linktree: "",
    website: "https://www.coaps.fsu.edu/",
  },
  {
    name: "Institute of Molecular Biophysics",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Institute%20of%20Molecular%20Biophysics%20signature.png",
    linktree: "",
    website: "https://biophysics.fsu.edu/",
  },
  {
    name: "Interdisciplinary Data Science Program",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Interdisciplinary%20Data%20Science%20Program%20signature.png",
    linktree: "https://linktr.ee/fsudatascience",
    website: "https://datascience.fsu.edu/",
  },
  {
    name: "Middle East Center",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Middle%20East%20Center%20signature.png",
    linktree: "",
    website: "https://mec.fsu.edu/",
  },
  {
    name: "Office of Stem Teaching Activities",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Office%20of%20Stem%20Teaching%20Activities%20signature%20alt.png",
    linktree: "https://linktr.ee/fsubiology",
    website: "https://www.bio.fsu.edu/osta/",
  },
  {
    name: "Program in Neuroscience",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Neuroscience%20signature.png",
    linktree: "https://linktr.ee/fsuneuroscience",
    website: "https://neuro.fsu.edu/",
  },
  {
    name: "Winthrop-King Institute",
    lockup:
      "https://artsandsciences.fsu.edu/sites/g/files/upcbnu321/files/email-lockups/Winthrop-King%20signature.png",
    linktree: "https://linktr.ee/winthropking",
    website: "https://winthropking.fsu.edu/",
  },
];

// create selects within the 'orgInput' dropdown by looping over the assets array

for (let [index, asset] of departmentAssets.entries()) {
  const optionAsset = document.createElement("option");
  optionAsset.value = index;

  if (asset.name !== "") {
    optionAsset.textContent = asset.name;
  } else {
    optionAsset.selected = true;
    optionAsset.textContent = asset.nameDefault;
  }
  orgElement.appendChild(optionAsset);
}

// update content displayed with the values entered when submit btnElement is "click"
// alternatively, use this and "input" to real-time update the display
this.addEventListener("input", function (e) {
  e.preventDefault();
  nameDisplay.innerHTML = `<b>${nameElement.value}</b>`;
  titleDisplay.innerHTML = titleElement.value.replace(/\n/gi, "<br />");
  fsuDisplay;
  orgNameDisplay.innerHTML = departmentAssets[orgElement.value].name;

  emailDisplay.innerHTML = `<a href="mailto:${emailElement.value}">${emailElement.value}</a>`;
  //   if phone is added, put office or cell designation
  if (phoneElement.value !== "") {
    phoneDisplay.innerHTML = `o: ${phoneElement.value}`;
  } else {
    phoneDisplay.innerHTML = "";
  }
  if (cellElement.value !== "") {
    cellDisplay.innerHTML = `c: ${cellElement.value}`;
  } else {
    cellDisplay.innerHTML = "";
  }
  //indexes the array of objects to the dropdown option, aka the html select/option input, choosen by the user.
  websiteDisplay.innerHTML = `<a href="${
    departmentAssets[orgElement.value].website
  }">${departmentAssets[orgElement.value].website.slice(
    8,
    departmentAssets[orgElement.value].website.length - 1
  )}</a>`;
  //   if linktree is empty, default to college which is index 1 in the array
  if (departmentAssets[orgElement.value].linktree !== "") {
    linktreeDisplay.innerHTML = `<a href="${
      departmentAssets[orgElement.value].linktree
    }">${departmentAssets[orgElement.value].linktree.slice(
      8,
      departmentAssets[orgElement.value].linktree.length
    )}</a>`;
  } else {
    linktreeDisplay.innerHTML = `<a href="${
      departmentAssets[1].linktree
    }">${departmentAssets[1].linktree.slice(
      8,
      departmentAssets[1].linktree.length
    )}</a>`;
  }

  //   if lockup is empty, default to FSU general lockup
  if (departmentAssets[orgElement.value].lockup !== "") {
    orgDisplay.innerHTML = `<img height="70" style="height: 70px; margin-top: 3px;" src="${
      departmentAssets[orgElement.value].lockup
    }">`;
  } else {
    orgDisplay;
  }
  console.log(e);
});

// select filled out email signature
async function copyEmailSignature() {
  const emailSignature = document.getElementById("emailSignature");

  // Create a temporary HTML element to hold the content
  const container = document.createElement("div");
  container.innerHTML = emailSignature.innerHTML;

  // Copy the HTML to the clipboard
  try {
    await navigator.clipboard.write([
      new ClipboardItem({
        "text/html": new Blob([container.innerHTML], { type: "text/html" }),
        "text/plain": new Blob([container.innerText], { type: "text/plain" }),
      }),
    ]);
    alert("Email signature copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

// Call the async copy function on click if required fields are complete
document.getElementById("copyButton").addEventListener("click", function () {
  if (nameElement.value !== "" && titleElement.value !== "") {
    copyEmailSignature();
  }
  if (nameElement.value === "") {
    nameElement.style.border = "1px solid red";
    document.querySelector("#nameLabel").style.color = "red";
    nameElement.addEventListener("keypress", function () {
      nameElement.style.border = "1px solid #5CB8B2";
      document.querySelector("#nameLabel").style.color = "#5CB8B2";
    });
  }
  if (titleElement.value === "") {
    titleElement.style.border = "1px solid red";
    document.querySelector("#jobLabel").style.color = "red";
    titleElement.addEventListener("keypress", function () {
      titleElement.style.border = "1px solid #5CB8B2";
      document.querySelector("#jobLabel").style.color = "#5CB8B2";
    });
  }
});
