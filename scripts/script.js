document.addEventListener('DOMContentLoaded', () => {
    // Sample artist data
    const artists = [
        {
            name: "Artist 1",
            genre: "rap",
            image: "assets/images/artist1.jpg",
            videoId: "YOUTUBE_VIDEO_ID"
        },
        {
            name: "Artist 2",
            genre: "malouf",
            image: "assets/images/artist2.jpg",
            videoId: "YOUTUBE_VIDEO_ID"
        }
    ];

    const grid = document.querySelector('.artist-grid');
    
    // Populate artist grid
    artists.forEach(artist => {
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.dataset.genre = artist.genre;
        
        card.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}">
            <div class="artist-info">
                <h3>${artist.name}</h3>
                <p>${artist.genre.toUpperCase()}</p>
                <div class="video-wrapper">
                    <iframe width="100%" height="200" 
                        src="https://www.youtube.com/embed/${artist.videoId}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });

    // Filter functionality
    document.querySelectorAll('.genre-filters button').forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            document.querySelectorAll('.genre-filters button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const genre = button.dataset.genre;
            const cards = document.querySelectorAll('.artist-card');
            
            cards.forEach(card => {
                card.style.display = (genre === 'all' || card.dataset.genre === genre) 
                    ? 'block' 
                    : 'none';
            });
        });
    });
});