const p1 = {
    score: 0,
    button: document.querySelector('.addP1'),
    display: document.querySelector('.P1-display')
}

const p2 = {
    score: 0,
    button: document.querySelector('.addP2'),
    display: document.querySelector('.P2-display')
}

const reset = document.querySelector('.reset');
const maxScore = document.querySelector('#max-score')

let winScore = 3;
let gameOver = false;

function updateScores (player, opponent)
{
    if (!gameOver) {
        player.score += 1;
        player.display.innerText = player.score;
    }
    if (player.score === winScore) {
        gameOver = true;
        player.display.classList.add('has-text-success')
        opponent.display.classList.add('has-text-danger')
        player.button.disabled = true
        opponent.button.disabled = true
    }
}
maxScore.addEventListener('change', function () {
    winScore = parseInt((this.value))
    resetScore;
})
p1.button.addEventListener('click', () => updateScores(p1,p2))
p2.button.addEventListener('click', () => updateScores(p2,p1))

reset.addEventListener('click', resetScore)



function resetScore(player, opponent) {
    gameOver = false
    for(let p of [p1, p2])
    {
        p.score = 0
        p.display.innerText = p.score
        p.display.classList.remove('has-text-success', 'has-text-danger')
        p.button.disabled = false
    }
}