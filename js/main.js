document.querySelector('button').addEventListener('click', () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        const name = data.results[0].name.first + " " + data.results[0].name.last 
        const picture = data.results[0].picture.large
        const email = data.results[0].email
        const location = data.results[0].location.street.number + " " + data.results[0].location.street.name + " " +  data.results[0].location.city + " " + data.results[0].location.country + " " + data.results[0].location.postcode

        document.querySelector('.container').innerHTML +=
        ` <div class="card" style="width: 18rem;">
        <img src="${picture}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${location}</p>
          <a href="#" class="primary">${email}</a>
        </div>
      </div> 
        `
    })  
})

