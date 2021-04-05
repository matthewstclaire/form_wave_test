const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    //turns inner text into array
    .split('')
    //can now map over the array
    .map((letter, index) => `<span style="transition-delay:${index *25}ms">${letter}</span>`)
    //turns it back into a string
    //the transition delay just delays each individual letter making it rise above at a different time. Nice!
    .join('')
})