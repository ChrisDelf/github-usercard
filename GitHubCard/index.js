/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards')
console.log(cards)


axios.get('https://api.github.com/users/ChrisDelf')
  .then(data => {
    console.log("ChrisDelf's profile:", data)
    const profiles = data.data
    console.log("data", profiles)
    const element = createGitCard(data.data)
     cards.appendChild(element)
  })




// handles error
  .catch(error => {
    console.log("The github api ran into an issuse", error)

  })


/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ["thayerve", "patpalmerston", "tetondan", "luishrd", "bigknell"];



setTimeout(function(){followersArray.forEach(followers => {
axios.get('https://api.github.com/users/'+ followers)
  .then(data => {
    console.log(data)
    const elements = createGitCard(data.data)
    cards.appendChild(elements)




})
})} , 100);

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function createGitCard (user) {
  //creating the elements
  const cardDiv = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const userName = document.createElement('h3')
  const realName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileAddress = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')


//setting class styling
  cardDiv.classList.add('card')
  img.classList.add('img')
  cardInfo.classList.add('card-info')
  userName.classList.add('name')
  //profile.classList.add('p')
  //profileAddress.classList.add('a')


// adding the content.
img.src = user.avatar_url
userName.textContent = user.login
realName.textContent = user.name
location.textContent = 'Location:'+ user.location
profile.textContent =  'Profile  '
profileAddress.href = user.html_url;
profileAddress.innerHTML = user.html_url;
followers.textContent = 'Followers: ' + user.followers
following.textContent = 'Following: '+ user.following
bio.textContent= 'Bio: ' + user.bio

// setting up the structure
cardDiv.appendChild(img)
cardDiv.appendChild(cardInfo)
cardInfo.appendChild(userName)
cardInfo.appendChild(realName)
cardInfo.appendChild(location)
cardInfo.appendChild(profile)
profile.appendChild(profileAddress)
cardInfo.appendChild(followers)
cardInfo.appendChild(following)
cardInfo.appendChild(bio)


return cardDiv
}




/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
