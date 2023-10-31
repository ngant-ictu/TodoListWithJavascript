function onDragStart(event) {
    event 
        .dataTransfer
        .setData('text/plain', event.target.id);
    
    event
        .currentTarget
        .style
        .backgroundColor = 'yellow'
}

function onDragEnd(event) {
    event
        .currentTarget
        .style
        .backgroundColor = 'white'
}

function onDragOver(event) {
    event.preventDefault();
}

function onDrop(event) {
    const id = event.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.currentTarget;
    dropzone.appendChild(draggableElement)

    console.log('dropzone', {dropzone});

    draggableElement
    .style
    .backgroundColor = '#fff'

    event
        .dataTransfer
        .clearData();
}