const items = document.querySelectorAll('.item')
items.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('selected');
        setTimeout(() => {
            item.classList.add('hidden');
        }, 0)
    });
    item.addEventListener('dragend', () => item.classList.remove('hidden'))
})

const placeholders = document.querySelectorAll('.placeholder');
placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragenter', () => event.target.classList.add('hovered'));
    placeholder.addEventListener('dragover', () => event.preventDefault());
    placeholder.addEventListener('dragleave', () => event.target.classList.remove('hovered'));
    placeholder.addEventListener('drop', () => {
        let placeInto; 
        if (event.target.classList.contains('placeholer')) {
            placeInto = event.target;
        } else {
            placeInto = event.target.closest('.placeholder');
        }
        let selectedElement = document.querySelector('.item.selected');
        placeInto.append(selectedElement);
        selectedElement.classList.remove('selected');
        placeInto.classList.remove('hovered');
    });
});