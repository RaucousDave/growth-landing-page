document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    if (!faqContainer) {
        console.error('No element with the class .faq-content found!');
        return;
    }

    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        if (!groupBody || !icon) {
            console.error('Missing .faq-group-body or <i> inside .faq-group-header');
            return;
        }

        // Toggle Icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle Body (optional, depending on your logic)
        groupBody.classList.toggle('open');

        // Close other open FAQ bodies

        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open')
                otherIcon.classList.remove('fa-minus')
                otherIcon.classList.add('fa-plus')
            }
        })
    });
});

// Mobile-menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active')
    })

})