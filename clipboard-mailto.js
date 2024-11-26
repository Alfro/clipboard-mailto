document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const mail = link.getAttribute('href').replace('mailto:', '').split('?')[0];
        navigator.clipboard.writeText(mail);
        _createMessage("Copied to clipboard", e.layerX + 20, e.layerY + 20);
        e.preventDefault();
    });
});

function _createMessage(text, x, y) {
    const message = document.createElement('message');
        message.textContent = text;
        message.style.userSelect = "none";
        message.style.opacity = 0.8;
        message.style.borderRadius = "3px";
        message.style.background = "#333";
        message.style.color = "white";
        message.style.position = "absolute";
        message.style.padding = "5px";
        message.style.top = `${y}px`;
        message.style.left = `${x}px`;
        document.body.appendChild(message);
        setTimeout(() => {
            const transition = 500;
            message.style.transition = `${transition/1000}s ease-in`;
            message.style.opacity = 0;
            setTimeout(() => {
                message.remove();
            }, transition);
        }, 500);
}
