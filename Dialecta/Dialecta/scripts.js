// Data structure for lessons in Unit 1
const unit1Lessons = [
    {
        title: "Lesson 1: Greetings",
        content: `
            <p>In this lesson, you'll learn basic greetings in Irish.</p>
            <ul>
                <li>Dia dhuit – Hello</li>
                <li>Conas atá tú? – How are you?</li>
                <li>Slán – Goodbye</li>
            </ul>
        `
    },
    {
        title: "Lesson 2: Numbers",
        content: `
            <p>Learn the numbers 1 to 10 in Irish.</p>
            <ul>
                <li>1 – a haon</li>
                <li>2 – a dó</li>
                <li>3 – a trí</li>
                <li>4 – a ceathair</li>
                <li>5 – a cúig</li>
                <li>6 – a sé</li>
                <li>7 – a seacht</li>
                <li>8 – a hocht</li>
                <li>9 – a naoi</li>
                <li>10 – a deich</li>
            </ul>
        `
    },
    {
        title: "Lesson 3: Pronouns",
        content: `
            <p>In this lesson, you will learn pronouns in Irish.</p>
            <ul>
                <li>mé – I</li>
                <li>tú – you</li>
                <li>sé – he</li>
                <li>sí – she</li>
                <li>sé – it (for masculine objects)</li>
                <li>sinn – we</li>
                <li>sibh – you (plural/formal)</li>
                <li>siad – they</li>
            </ul>
        `
    },
    {
        title: "Lesson 4: Verb 'To Be'",
        content: `
            <p>Learn the verb 'to be' in Irish.</p>
            <ul>
                <li>tá mé – I am</li>
                <li>tá tú – you are</li>
                <li>tá sé/sí – he/she is</li>
                <li>táimid – we are</li>
                <li>tá sibh – you are (plural)</li>
                <li>tá siad – they are</li>
            </ul>
        `
    },
    // Add more lessons as needed
];

// Tracking current lesson index
let currentLessonIndex = 0;

// Elements for displaying the lesson content and navigation
const nextButton = document.getElementById('next-button');
const lessonTitle = document.getElementById('lesson-title');
const lessonContent = document.getElementById('lesson-content');

// Function to load a lesson by its index
function loadLesson(index) {
    if (index < unit1Lessons.length) {
        lessonTitle.innerHTML = unit1Lessons[index].title;
        lessonContent.innerHTML = unit1Lessons[index].content;
    }
}

// Next button functionality to go to the next lesson
nextButton.addEventListener('click', () => {
    currentLessonIndex++;
    if (currentLessonIndex < unit1Lessons.length) {
        loadLesson(currentLessonIndex);
    } else {
        nextButton.innerHTML = "Completed"; // Change button text to "Completed" after the last lesson
        nextButton.disabled = true; // Disable next button after completion
    }
});

// Initial load (start at lesson 1)
loadLesson(currentLessonIndex);

// Progress tracking (if needed to store and retrieve progress from localStorage)
function saveProgress() {
    localStorage.setItem('irishUnit1Progress', currentLessonIndex);
}

function loadProgress() {
    const savedProgress = localStorage.getItem('irishUnit1Progress');
    if (savedProgress) {
        currentLessonIndex = parseInt(savedProgress, 10);
        loadLesson(currentLessonIndex);
    }
}

// Automatically load progress when the page loads
window.addEventListener('load', loadProgress);

// Save progress when navigating away from the page
window.addEventListener('beforeunload', saveProgress);

// Optional: You can implement a function to reset progress (e.g., for testing purposes)
function resetProgress() {
    localStorage.removeItem('irishUnit1Progress');
    currentLessonIndex = 0;
    loadLesson(currentLessonIndex);
}
