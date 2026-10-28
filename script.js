document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const dialog = document.getElementById('descriptionModal');
    const modalText = document.getElementById('modal-text');
    const closeButton = dialog.querySelector('.close');

    const openDescription = (card) => {
        modalText.textContent = card.dataset.description;
        dialog.showModal();
    };

    gallery.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) {
            return;
        }

        const card = event.target.closest('.card[data-description]');
        if (card && gallery.contains(card)) {
            openDescription(card);
        }
    });

    gallery.addEventListener('keydown', (event) => {
        if (!(event.target instanceof Element) || !['Enter', ' '].includes(event.key)) {
            return;
        }

        const card = event.target.closest('.card[data-description]');
        if (card && gallery.contains(card)) {
            event.preventDefault();
            openDescription(card);
        }
    });

    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
});
