document.addEventListener('DOMContentLoaded', () => {
    const videoLinks = document.querySelectorAll('.yt-thumb-link');

    videoLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const videoId = link.dataset.videoId;
            if (!videoId) return;

            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');

            // To maintain the styles, we copy classes from the link to the iframe
            iframe.className = link.className;
            
            link.parentNode.replaceChild(iframe, link);
        });
    });
});