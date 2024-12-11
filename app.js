const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const userCard = document.getElementById('userCard');
const errorMessage = document.getElementById('errorMessage');
const avatar = document.getElementById('avatar');
const username = document.getElementById('username');
const bio = document.getElementById('bio');
const profileLink = document.getElementById('profileLink');
const repos = document.getElementById('repos');
const followers = document.getElementById('followers');
const following = document.getElementById('following');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        getUserData(query);
    }
});

async function getUserData(username) {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    
    if (!response.ok) {
        errorMessage.classList.remove('hidden');
        userCard.classList.add('hidden');
        return;
    }
    
    const userData = await response.json();
    displayUserData(userData);
}

function displayUserData(user) {
    avatar.src = user.avatar_url;
    username.textContent = user.login;
    bio.textContent = user.bio || 'No bio available';
    profileLink.href = user.html_url;
    profileLink.textContent = `Visit ${user.login}'s GitHub Profile`;
    repos.textContent = user.public_repos;
    followers.textContent = user.followers;
    following.textContent = user.following;

    userCard.classList.remove('hidden');
    errorMessage.classList.add('hidden');
}
