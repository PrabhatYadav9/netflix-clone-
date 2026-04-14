const faqAnswers = {
    "What is Netflix?":
        "Netflix is a streaming service with movies, TV shows, documentaries, anime, and more on internet-connected devices.",
    "How much does Netflix cost?":
        "Plans vary by region and device support. You can choose a plan that fits how you want to watch.",
    "Where can I watch?":
        "Watch on phones, tablets, smart TVs, laptops, streaming devices, and game consoles.",
    "How do I cancel?":
        "You can cancel online anytime. There are no cancellation fees and access continues until the end of your billing period.",
    "What can I watch on Netflix?":
        "You can watch films, series, Netflix originals, documentaries, kids' shows, and more.",
    "Is Netflix good for kids?":
        "Kids profiles help families give children a simpler space with age-appropriate shows and parental controls."
};

document.querySelectorAll(".f1").forEach((item) => {
    const question = item.querySelector("span")?.textContent.trim();
    const answerText = faqAnswers[question];

    item.setAttribute("role", "button");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-expanded", "false");

    if (answerText) {
        const answer = document.createElement("div");
        answer.className = "faq-answer";
        answer.textContent = answerText;
        item.insertAdjacentElement("afterend", answer);
    }

    const toggleAnswer = () => {
        const answer = item.nextElementSibling;
        const isOpen = item.classList.toggle("active");

        item.setAttribute("aria-expanded", String(isOpen));
        if (answer?.classList.contains("faq-answer")) {
            answer.classList.toggle("open", isOpen);
        }
    };

    item.addEventListener("click", toggleAnswer);
    item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleAnswer();
        }
    });
});

document.querySelectorAll(".txt div, .last div").forEach((form) => {
    const input = form.querySelector("input[type='email']");
    const button = form.querySelector(".red-get");
    const message = form.querySelector(".form-message");

    if (!input || !button || !message) {
        return;
    }

    button.addEventListener("click", () => {
        const email = input.value.trim();

        if (!email) {
            message.style.color = "#ffb3b3";
            message.textContent = "Please enter your email address.";
            input.focus();
            return;
        }

        if (!input.checkValidity()) {
            message.style.color = "#ffb3b3";
            message.textContent = "Please enter a valid email address.";
            input.focus();
            return;
        }

        message.style.color = "#46d369";
        message.textContent = "Thanks. Your email is ready to continue.";
    });
});
