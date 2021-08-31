function loadData() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displayUser(data.results[0]));
}

const displayUser = (user) => {
  console.log(user);
  const userContiner = document.getElementById("user-box");
  userContiner.innerHTML = `
 <img src="${user.picture.large}" alt="" />
 <h2 class="text-white">User Name: ${user.name.title}  ${user.name.first}  ${user.name.last}</h2>
 <h3 class="text-muted">Gender: ${user.gender} </h3>
 <h3 class="text-primary">Email: ${user.email} </h3>
 <h3 class="text-info">Cell No: ${user.phone} </h3>
 `;
};
