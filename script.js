document.addEventListener('DOMContentLoaded', () => {
    const showMessageButton = document.getElementById('showMessageButton');
    const hiddenMessage = document.getElementById('hiddenMessage');

    showMessageButton.addEventListener('click', () => {
        hiddenMessage.textContent = "From the moment I met you, my heart knew you were the one. You make my life complete, and I can't imagine spending it with anyone else. Will you marry me Monika ?";
        hiddenMessage.style.display = 'block'; // Show the hidden message
    });
});