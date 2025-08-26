function displayUsers(users) {
  const userList = document.querySelector("#user-list");

  users.forEach((user) => {
    const listItem = document.createElement("li");

    listItem.textContent = `${user.name} (${user.email})`;

    userList.appendChild(listItem);
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    displayUsers(users);
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });
