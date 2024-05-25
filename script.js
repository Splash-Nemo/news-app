let headlineItems = document.querySelectorAll('.headline-item'); // Select all headline items
let shortHeadlineItems = document.querySelectorAll('.short-headline-item');
let nextButton = document.querySelector('.next-button');

let currentIndex = 0; // Track the index of the current active element
let pointer = 1;

nextButton.addEventListener('click', () => {
    // Handling for the main headline items
    if (currentIndex > 0) {
        let abc = currentIndex - 1;
        headlineItems[abc].classList.remove('next');
        headlineItems[abc].style.zIndex = '99';
        headlineItems[abc].style.transform = "translateX(0)";
    } else if (currentIndex === 0) {
        let abc = headlineItems.length - 1;
        headlineItems[abc].classList.remove('next');
        headlineItems[abc].style.zIndex = '99';
        headlineItems[abc].style.transform = "translateX(0)";
    }

    // Rearrange the headline items based on the current index
    let container = document.querySelector('.headlines-list');
    headlineItems[currentIndex].classList.add('next');
    container.appendChild(headlineItems[currentIndex]);

    // Increment currentIndex, and if it exceeds the length of headlineItems, loop back to 0
    currentIndex = (currentIndex + 1) % headlineItems.length;
    headlineItems[currentIndex].style.zIndex = '100';

    // Handling for the short headline items
    let current = shortHeadlineItems[pointer];
    let beforeIndex = pointer - 1;

    current.style.backgroundColor = 'red';
    if (beforeIndex < 0)
        shortHeadlineItems[shortHeadlineItems.length - 1].style.backgroundColor = '#22282E';
    else
        shortHeadlineItems[beforeIndex].style.backgroundColor = '#22282E';
    pointer = (pointer + 1) % shortHeadlineItems.length;
});










// let headlineItems = document.querySelectorAll('.headline-item'); // Changed variable name to plural for clarity
// let nextButton = document.querySelector('.next-button');

// let currentIndex = 0; // Track the index of the current active element

// nextButton.addEventListener('click', () => {
//     // Increment currentIndex, and if it exceeds the length of headlineItems, loop back to 0
//     let currentHeadline = headlineItems[currentIndex];
//     currentIndex = (currentIndex + 1) % headlineItems.length;
    
//     let nextHeadline = headlineItems[currentIndex];
//     currentHeadline.classList.add('next'); // Add 'next' class to the next element

//     currentHeadline.style.zIndex='100';
//     nextHeadline.style.zIndex='99';
// });