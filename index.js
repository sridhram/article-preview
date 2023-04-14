const authorContainer = document.getElementsByClassName('author-container')[0];
const shareContainer = document.getElementsByClassName('social-media-container')[0];
const shareIcon = document.getElementsByClassName('share-container');

const showShareIcon = () => {
    const isDesktop = getComputedStyle(shareContainer).position === 'absolute';
    if(isDesktop){
        shareIcon[1].classList.add('hide');
        shareContainer.classList.toggle('hide');
        const {top,width,left} = event.currentTarget.getBoundingClientRect();
        shareContainer.style.top = top - (2 * width) + 'px';
        shareContainer.style.left = left+width-shareContainer.getBoundingClientRect().width + 'px'
    }else{
        if(event.currentTarget.parentElement.classList.contains('social-media-container')){
        authorContainer.classList.remove('hide');
        shareContainer.classList.add('hide');
    }else{
        shareContainer.classList.remove('hide');
        authorContainer.classList.add('hide');
    }
    }
};

for(const iconEl of shareIcon){
    iconEl.addEventListener('click',showShareIcon);
}
