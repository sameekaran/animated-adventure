// Coffee Cup Profile - Material Design JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Coffee Cup Profile initialized');
    
    // Set progress bars
    const caffeineProgress = document.querySelector('#caffeine-progress');
    const flavorProgress = document.querySelector('#flavor-progress');
    const boostProgress = document.querySelector('#boost-progress');
    
    // Initialize progress components
    if (caffeineProgress) {
        caffeineProgress.addEventListener('mdl-componentupgraded', function() {
            this.MaterialProgress.setProgress(75);
        });
    }
    
    if (flavorProgress) {
        flavorProgress.addEventListener('mdl-componentupgraded', function() {
            this.MaterialProgress.setProgress(90);
        });
    }
    
    if (boostProgress) {
        boostProgress.addEventListener('mdl-componentupgraded', function() {
            this.MaterialProgress.setProgress(85);
        });
    }
    
    // Add ripple effect to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Could open a lightbox or modal here
            console.log('Gallery item clicked');
        });
    });
    
    // Add follow functionality
    const followButton = document.querySelector('.mdl-card__actions .mdl-button');
    if (followButton) {
        followButton.addEventListener('click', function() {
            const isFollowing = this.textContent.trim() === 'Unfollow';
            
            if (isFollowing) {
                this.textContent = 'Follow';
            } else {
                this.textContent = 'Unfollow';
                
                // Show a toast notification
                const notification = document.createElement('div');
                notification.className = 'mdl-js-snackbar mdl-snackbar';
                notification.innerHTML = `
                    <div class="mdl-snackbar__text"></div>
                    <button class="mdl-snackbar__action" type="button"></button>
                `;
                document.body.appendChild(notification);
                
                const snackbarData = {
                    message: 'You are now following Joe Brew!',
                    timeout: 2000
                };
                
                const snackbar = notification;
                componentHandler.upgradeElement(snackbar);
                snackbar.MaterialSnackbar.showSnackbar(snackbarData);
            }
        });
    }
});