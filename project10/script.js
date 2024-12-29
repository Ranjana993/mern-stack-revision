const btn = document.getElementById("btn");


const fetchUser = async (value) => {
  if(!value) return alert("please enter any username ")
  const res = await fetch(`https://api.github.com/users/${value}`)
  const result = await res.json()
  return result 
}

btn.addEventListener("click", async () => {
  const value = document.getElementById("value").value;
  const res = await fetchUser(value)
  console.log(res);
  if (!res.avatar_url){
    document.querySelector(".content").innerHTML =`<h2>No user found</h2>`;
  }else{
    document.querySelector(".content").innerHTML = `
              <div class="img_container">
        <img class="img" src=${res.avatar_url} alt="">
        <h3>${res.name || value}</h3>
        <p>${res.bio || ""}</p>
        <span>${res.location || ""}</span>
      </div>
      <div class="data">
        <div class="bio_data">
          <div class="bold">
            <h4>Followers</h4>
            <p>${res.followers}</p>
          </div>
          <div class="bold">
            <h4>Following</h4>
            <p>${res.following}</p>
          </div>
        </div>
        <button class="profile_btn"><a href='${res.html_url}' target='_blank'>View Profile</a></button>
      </div>
  `
  }



})