"use strict"

//event listener for fetching data on click/


const myBtn = document.getElementById('myBtn');

myBtn.addEventListener('click', () => { 
 //get input from user teams name.
 let groupName = document.getElementById('teamName').value;
//  console.log(groupName);


 var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://yearupdemo.azurewebsites.net/api/users", requestOptions)
    .then(response => response.json())
    .then(result => displayTeam(result,groupName))
    .catch(error => console.log('error', error));


}
);




function displayTeam(result, groupName) {
    // console.log(result)
    // console.log(groupName);
    let filteredTeams = result.filter(user => user.Groupname === groupName)

  console.log(filteredTeams);
  console.log(filteredTeams[0].Name);
//   console.log(filteredTeams[0].Email);
//   console.log(filteredTeams[0].GitHubProfile);
//   console.log(filteredTeams[0].imageURL);
  
  let message = `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `
    document.getElementById('output').innerHTML = message;
}



