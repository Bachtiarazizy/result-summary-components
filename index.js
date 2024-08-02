document.addEventListener("DOMContentLoaded", () => {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const scoresContainer = document.getElementById('scores');
      data.forEach(item => {
        const scoreDiv = document.createElement('div');
        scoreDiv.className = 'score';

        const icon = document.createElement('img');
        icon.src = item.icon;
        icon.alt = `${item.category} icon`;

        const category = document.createElement('p');
        category.textContent = item.category;

        const score = document.createElement('p');
        score.textContent = `${item.score} / 100`;

        scoreDiv.appendChild(icon);
        scoreDiv.appendChild(category);
        scoreDiv.appendChild(score);

        scoresContainer.appendChild(scoreDiv);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
