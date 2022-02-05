const greetBtn = document.querySelector('#greetBtn');

greetBtn.addEventListener('click',(e) => {
    let name = document.querySelector('#name');
    let age = document.querySelector('#age');
    if(name.value === ''){
        document.querySelector('#jsUpdated').textContent = `Please enter your name so I can greet you!`;
        return false;
    }
    document.querySelector('#jsUpdated').textContent = `Hello, ${name.value}`;
})
