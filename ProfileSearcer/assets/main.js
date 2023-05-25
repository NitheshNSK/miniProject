const getUserDetails = async (username) => {
    try {
        let response = await fetch(`https://api.github.com/users/${username}`)
        let data = await response.json();
        return data;
    } catch (e) {
        return null;
    }
}

const createUserCard = (userData) => {
    console.log(userData)
    let div = document.getElementById("main");
    div.innerHTML=`
    <div class="card mb-3 bg-secondary text-white" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 p-3">
                <img src="${userData.avatar_url}" class="p-3 img-fluid rounded-circle" alt="...">
            </div>
         <div class="col-md-8">
        <div class="card-body p-3 m-3">
            <h5 class="card-title">${userData.name}</h5>
            <p class="card-text">${userData.bio}</p>
            <p class="d-flex justify-content-between">
            <small>Follower : ${userData.followers}</small>
            <small>Followings : ${userData.following}</small>
            <small>Repos : ${userData.public_repos}</small>
            
            </p>
            <p class="d-flex justify-content-between">
            <small>Twitter : ${userData.twitter_username}</small>
            <small>Location : ${userData.location}</small>
            </p>
            
            
        </div>
    </div>
  </div>
</div>
    
    `;
}