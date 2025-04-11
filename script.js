fetch('http://localhost:3000/year')
    .then(data => {
    document.querySelector('#year').textContent = data.year;
    })