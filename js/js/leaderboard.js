document.addEventListener('DOMContentLoaded', () => {
    // Get leaderboard data from localStorage or create mock data
    let leaderboardData = JSON.parse(localStorage.getItem('quizLeaderboard')) || [
        { name: 'QuizMaster', avatar: 'https://ui-avatars.com/api/?name=QuizMaster&background=6c5ce7', score: 95, topic: 'JavaScript', date: '2024-06-15', email: 'quizmaster@example.com' },
        { name: 'CodeNinja', avatar: 'https://ui-avatars.com/api/?name=CodeNinja&background=00b894', score: 90, topic: 'React', date: '2025-07-14', email: 'ninja@example.com' },
        { name: 'DevPro', avatar: 'https://ui-avatars.com/api/?name=DevPro&background=fd79a8', score: 85, topic: 'JavaScript', date: '2025-06-13', email: 'dev@example.com' },
        { name: 'WebWizard', avatar: 'https://ui-avatars.com/api/?name=WebWizard&background=fdcb6e', score: 80, topic: 'React', date: '2025-07-12', email: 'wizard@example.com' },
        { name: 'ByteMe', avatar: 'https://ui-avatars.com/api/?name=ByteMe&background=a29bfe', score: 75, topic: 'JavaScript', date: '2025-06-11', email: 'byte@example.com' },
    ];
    
    // Sort by score descending
    leaderboardData.sort((a, b) => b.score - a.score);
    
    const leaderboardBody = document.getElementById('leaderboardBody');
    const filterAll = document.getElementById('filterAll');
    const filterJS = document.getElementById('filterJS');
    const filterReact = document.getElementById('filterReact');
    const backButton = document.getElementById('backButton');
    
    let currentFilter = 'all';
    
    // Load leaderboard data
    function loadLeaderboard(filter = 'all') {
        leaderboardBody.innerHTML = '';
        
        const filteredData = filter === 'all' 
            ? leaderboardData 
            : leaderboardData.filter(item => item.topic === filter);
        
        filteredData.forEach((entry, index) => {
            const row = document.createElement('tr');
            
            // Add medal emoji for top 3
            let rankDisplay = index + 1;
            if (index === 0) rankDisplay = '🥇 ' + rankDisplay;
            else if (index === 1) rankDisplay = '🥈 ' + rankDisplay;
            else if (index === 2) rankDisplay = '🥉 ' + rankDisplay;
            
            row.innerHTML = `
                <td>${rankDisplay}</td>
                <td class="player-cell">
                    <img src="${entry.avatar}" alt="${entry.name}">
                    <div>
                        <strong>${entry.name}</strong>
                        <small>${entry.email}</small>
                    </div>
                </td>
                <td>
                    <span class="score-value">${entry.score}%</span>
                    <div class="score-bar" style="width: ${entry.score}%"></div>
                </td>
                <td>${entry.topic}</td>
                <td>${entry.date}</td>
            `;
            leaderboardBody.appendChild(row);
        });
    }
    
    // Initial load
    loadLeaderboard();
    
    // Filter event listeners
    filterAll.addEventListener('click', () => {
        currentFilter = 'all';
        filterAll.classList.add('active');
        filterJS.classList.remove('active');
        filterReact.classList.remove('active');
        loadLeaderboard('all');
    });
    
    filterJS.addEventListener('click', () => {
        currentFilter = 'JavaScript';
        filterAll.classList.remove('active');
        filterJS.classList.add('active');
        filterReact.classList.remove('active');
        loadLeaderboard('JavaScript');
    });
    
    filterReact.addEventListener('click', () => {
        currentFilter = 'React';
        filterAll.classList.remove('active');
        filterJS.classList.remove('active');
        filterReact.classList.add('active');
        loadLeaderboard('React');
    });
    
    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});