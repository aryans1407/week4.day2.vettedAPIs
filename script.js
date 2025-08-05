document.getElementById("getFortune").addEventListener("click", async () => {
    // fate will be = "unknown fate" if user doesnt enter anything
    const userQuestion = document.getElementById("userInput").value || "unknown fate";
    
    // cat api
    const catApiUrl = "https://api.thecatapi.com/v1/images/search"
    const catResponse = await fetch(catApiUrl);
    const catData = await catResponse.json();
    const catUrl = catData[0]?.url;

    document.getElementById("catImage").innerHTML = catUrl
    ? `<h3>The Mystic Cat Has Spoken:</h3><img src="${catUrl}" alt="Mystic Cat" />`
    : "<p>The cat is not amused. No image today.</p>";

    // random user api
    const userResponse = await fetch("https://randomuser.me/api/")
    const userData = await userResponse.json();
    const user = userData.results[0];
    
    document.getElementById("randomUser").innerHTML = user
    ? `
      <h3>Your Fortune Messenger:</h3>
      <img src="${user.picture.large}" alt="Random Person" />
      <p><strong>${user.name.first} ${user.name.last}</strong> from ${user.location.country} says:<br>
      <em>"Your question about '<strong>${userQuestion}</strong>' is known only to the cat."</em></p>
    `
    : "<p>No fortune teller was available.</p>";
});