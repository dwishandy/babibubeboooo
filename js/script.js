window.addEventListener("load", function () {
  const loading = document.querySelector(".loading");
  const container = document.querySelector(".container");

  loading.style.transition = "opacity 0.2s"; //
  loading.style.opacity = 0;

  setTimeout(() => {
    loading.style.display = "none";

    container.style.display = "block";
    container.style.opacity = 0;
    container.style.transition = "opacity 0.2s";
    requestAnimationFrame(() => {
      container.style.opacity = 1;
    });
  }, 200);
});

const greetingText =
  "Hey, Kamu tau Ga? Kamu adalah Perempuan Tercantik yang Pernah 'Ku Temui! 💖";
const greetingElement = document.querySelector(".greeting");
let charIndex = 0;

function typeGreeting() {
  if (charIndex < greetingText.length) {
    greetingElement.textContent += greetingText.charAt(charIndex);
    charIndex++;
    setTimeout(typeGreeting, 100);
  }
}

const reasons = [
  {
    text: "Kamu orang yang baik dan luar biasa, dan aku beruntung bisa memiliki hubungan yang baik denganmu. 💖",
    emoji: "🌟",
  },
  {
    text: "Semoga harimu dipenuhi dengan cinta, tawa, dan kebahagiaan. 🌸 ",
    emoji: "💗",
  },
  {
    text: "Semoga kamu bahagia dan mendapatkan segala yang kamu inginkan. ✨ ",
    emoji: "💕",
  },
  {
    text: "Tetaplah menjadi perempuan manis yang selalu menyebarkan energi positif di sekitar. Semoga ini menjadi tahun yang paling bahagia! 🥳 ",
    emoji: "🌟",
  },
];

let currentReasonIndex = 0;
const reasonsContainer = document.getElementById("reasons-container");
const shuffleButton = document.querySelector(".shuffle-button");
const reasonCounter = document.querySelector(".reason-counter");
let isTransitioning = false;

function createReasonCard(reason) {
  const card = document.createElement("div");
  card.className = "reason-card";

  const text = document.createElement("div");
  text.className = "reason-text";
  text.innerHTML = `${reason.emoji} ${reason.text}`;

  card.appendChild(text);

  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 0.5,
    ease: "back.out",
  });

  return card;
}

function displayNewReason() {
  if (isTransitioning) return;
  isTransitioning = true;

  if (currentReasonIndex < reasons.length) {
    const card = createReasonCard(reasons[currentReasonIndex]);
    reasonsContainer.appendChild(card);

    reasonCounter.textContent = `Reason ${currentReasonIndex + 1} of ${
      reasons.length
    }`;

    currentReasonIndex++;

    if (currentReasonIndex === reasons.length) {
      gsap.to(shuffleButton, {
        scale: 1.1,
        duration: 0.5,
        ease: "elastic.out",
        onComplete: () => {
          shuffleButton.textContent = "Enter Our Storylane 💫";
          shuffleButton.classList.add("story-mode");
          shuffleButton.addEventListener("click", () => {
            gsap.to("body", {
              opacity: 0,
              duration: 1,
              onComplete: () => {
                window.location.href = "last.html";
              },
            });
          });
        },
      });
    }

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  } else {
    window.location.href = "#storylane";
  }
}

shuffleButton.addEventListener("click", () => {
  gsap.to(shuffleButton, {
    scale: 0.9,
    duration: 0.1,
    yoyo: true,
    repeat: 1,
  });
  displayNewReason();
});

const floatingElements = ["💖", "✨", "🌸", "💫", "💕"];
function createFloating() {
  const element = document.createElement("div");
  element.className = "floating";
  element.textContent =
    floatingElements[Math.floor(Math.random() * floatingElements.length)];
  element.style.left = Math.random() * 100 + "vw";
  element.style.top = Math.random() * 100 + "vh";
  element.style.fontSize = Math.random() * 20 + 20 + "px";
  document.body.appendChild(element);

  gsap.to(element, {
    y: -500,
    x: Math.random() * 100 - 50,
    rotation: Math.random() * 360,
    duration: Math.random() * 5 + 5,
    opacity: 1,
    ease: "none",
    onComplete: () => element.remove(),
  });
}

window.addEventListener("load", () => {
  gsap.to("h1", {
    opacity: 1,
    duration: 1,
    y: 20,
    ease: "bounce.out",
  });

  typeGreeting();

  setInterval(createFloating, 1000);
});
