fetch('https://whatyearisit-backend-nine-ivory.vercel.app/year')
    .then(response => response.json())
    .then(data => {
    document.querySelector('#year').textContent = data.year;
    })