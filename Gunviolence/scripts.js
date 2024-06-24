document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');

    // Toggle Dark/Light Mode
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            toggleButton.textContent = 'Switch to Dark Mode';
        } else {
            toggleButton.textContent = 'Switch to Light Mode';
        }
    });

    // Fetch and display top stories
    fetchTopStories();

    // Fetch and display local news
    fetchLocalNews();

    // Fetch and display resources
    fetchResources();

    // Initialize data visualization
    initializeDataVisualization();

    // Initialize search and filter options
    initializeSearchAndFilter();

    // Initialize real-time updates
    initializeRealTimeUpdates();

    // Initialize incident reports
    initializeIncidentReports();
});

// Fetch top stories
function fetchTopStories() {
    const topStoriesSection = document.getElementById('top-stories').querySelector('.card-container');

    fetch('https://api.example.com/top-stories')
        .then(response => response.json())
        .then(data => {
            data.stories.forEach(story => {
                const storyCard = document.createElement('div');
                storyCard.className = 'card';
                storyCard.innerHTML = `
                    <img src="${story.image}" alt="Story Image">
                    <h3>${story.title}</h3>
                    <p>${story.summary}</p>
                    <a href="${story.url}">Read more</a>
                `;
                topStoriesSection.appendChild(storyCard);
            });
        })
        .catch(error => console.error('Error fetching top stories:', error));
}

// Fetch local news
function fetchLocalNews() {
    const localNewsSection = document.getElementById('local-news').querySelector('.card-container');

    fetch('https://api.example.com/local-news')
        .then(response => response.json())
        .then(data => {
            data.news.forEach(newsItem => {
                const newsCard = document.createElement('div');
                newsCard.className = 'card';
                newsCard.innerHTML = `
                    <img src="${newsItem.image}" alt="News Image">
                    <h3>${newsItem.title}</h3>
                    <p>${newsItem.summary}</p>
                    <a href="${newsItem.url}">Read more</a>
                `;
                localNewsSection.appendChild(newsCard);
            });
        })
        .catch(error => console.error('Error fetching local news:', error));
}

// Fetch resources
function fetchResources() {
    const resourcesSection = document.getElementById('resources').querySelector('.card-container');

    fetch('https://api.example.com/resources')
        .then(response => response.json())
        .then(data => {
            data.resources.forEach(resource => {
                const resourceCard = document.createElement('div');
                resourceCard.className = 'card';
                resourceCard.innerHTML = `
                    <h3>${resource.title}</h3>
                    <p>${resource.description}</p>
                    <a href="${resource.url}">Learn more</a>
                `;
                resourcesSection.appendChild(resourceCard);
            });
        })
        .catch(error => console.error('Error fetching resources:', error));
}

// Initialize data visualization
function initializeDataVisualization() {
    const mapsSection = document.getElementById('maps');
    const graphsChartsSection = document.getElementById('graphs-charts');
    const heatmapsSection = document.getElementById('heatmaps');

    // Placeholder for actual data visualization code
    mapsSection.innerHTML = '<p>Interactive maps will be displayed here.</p>';
    graphsChartsSection.innerHTML = '<p>Graphs and charts will be displayed here.</p>';
    heatmapsSection.innerHTML = '<p>Heatmaps will be displayed here.</p>';

    // Example of creating a chart using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize search and filter options
function initializeSearchAndFilter() {
    const incidentSearchSection = document.getElementById('incident-search');
    const filtersSection = document.getElementById('filters');

    // Placeholder for actual search and filter code
    incidentSearchSection.innerHTML = '<p>Search incidents by keyword or date.</p>';
    filtersSection.innerHTML = '<p>Filter incidents by category or location.</p>';
}

// Initialize real-time updates
function initializeRealTimeUpdates() {
    const liveDataFeedsSection = document.getElementById('live-data-feeds');
    const automaticRefreshSection = document.getElementById('automatic-refresh');

    // WebSocket for real-time updates
    const socket = new WebSocket('ws://your-websocket-url');

    socket.addEventListener('open', function (event) {
        console.log('Connected to WebSocket');
    });

    socket.addEventListener('message', function (event) {
        const data = JSON.parse(event.data);
        updatePageWithNewData(data);
    });

    function updatePageWithNewData(data) {
        // Function to update the page with new data from the WebSocket
        const updatesContainer = document.getElementById('real-time-updates');
        const newUpdate = document.createElement('div');
        newUpdate.className = 'update';
        newUpdate.textContent = `New incident reported: ${data.incident}`;
        updatesContainer.prepend(newUpdate);
    }

    // Placeholder for actual real-time updates code
    liveDataFeedsSection.innerHTML = '<p>Live data feeds will be displayed here.</p>';
    automaticRefreshSection.innerHTML = '<p>Data will be automatically refreshed every few seconds.</p>';
}

// Initialize incident reports
function initializeIncidentReports() {
    const incidentDetailsSection = document.getElementById('incident-details');
    const caseStudiesSection = document.getElementById('case-studies');

    // Placeholder for actual incident reports code
    incidentDetailsSection.innerHTML = '<p>Detailed incident reports will be displayed here.</p>';
    caseStudiesSection.innerHTML = '<p>Case studies will be displayed here.</p>';
}

// Utility functions for advanced algorithms and data structures

// Example: Implementing a basic Trie for search autocomplete
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }
}





// Integration of advanced algorithms with incident search and filter

function initializeSearchAndFilter() {
    const incidentSearchSection = document.getElementById('incident-search');
    const filtersSection = document.getElementById('filters');

    // Implementing search autocomplete using Trie
    const searchInput = document.getElementById('search-input');
    const searchSuggestions = document.getElementById('search-suggestions');
    const trie = new Trie();

    fetch('https://api.example.com/incidents')
        .then(response => response.json())
        .then(data => {
            data.incidents.forEach(incident => {
                trie.insert(incident.keyword);
            });
        })
        .catch(error => console.error('Error fetching incidents:', error));

    searchInput.addEventListener('input', function () {
        const query = searchInput.value;
        searchSuggestions.innerHTML = '';
        if (query.length > 0) {
            const suggestions = trie.startsWith(query) ? getTrieSuggestions(trie.root, query) : [];
            suggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = suggestion;
                searchSuggestions.appendChild(suggestionItem);
            });
        }
    });

    function getTrieSuggestions(node, prefix) {
        const suggestions = [];
        function dfs(currentNode, currentPrefix) {
            if (currentNode.isEndOfWord) {
                suggestions.push(currentPrefix);
            }
            for (let char in currentNode.children) {
                dfs(currentNode.children[char], currentPrefix + char);
            }
        }
        dfs(node, prefix);
        return suggestions;
    }

    // Placeholder for filter functionality using advanced data structures
    filtersSection.innerHTML = '<p>Filter incidents by category or location using advanced data structures.</p>';
}

// Initialize real-time updates
function initializeRealTimeUpdates() {
    const liveDataFeedsSection = document.getElementById('live-data-feeds');
    const automaticRefreshSection = document.getElementById('automatic-refresh');

    // WebSocket for real-time updates
    const socket = new WebSocket('ws://your-websocket-url');

    socket.addEventListener('open', function (event) {
        console.log('Connected to WebSocket');
    });

    socket.addEventListener('message', function (event) {
        const data = JSON.parse(event.data);
        updatePageWithNewData(data);
    });

    function updatePageWithNewData(data) {
        // Function to update the page with new data from the WebSocket
        const updatesContainer = document.getElementById('real-time-updates');
        const newUpdate = document.createElement('div');
        newUpdate.className = 'update';
        newUpdate.textContent = `New incident reported: ${data.incident}`;
        updatesContainer.prepend(newUpdate);
    }

    // Placeholder for actual real-time updates code
    liveDataFeedsSection.innerHTML = '<p>Live data feeds will be displayed here.</p>';
    automaticRefreshSection.innerHTML = '<p>Data will be automatically refreshed every few seconds.</p>';
}

// Initialize incident reports
function initializeIncidentReports() {
    const incidentDetailsSection = document.getElementById('incident-details');
    const caseStudiesSection = document.getElementById('case-studies');

    // Placeholder for actual incident reports code
    incidentDetailsSection.innerHTML = '<p>Detailed incident reports will be displayed here.</p>';
    caseStudiesSection.innerHTML = '<p>Case studies will be displayed here.</p>';
}
