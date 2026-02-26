function update() {
    const now = new Date();

    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('timer').textContent = `${h}:${m}:${s}`;

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const fullYear = now.getFullYear();


    document.getElementById('date').textContent = `${day}|${month}|${fullYear}`;
}

setInterval(update, 1000);

update();

const notepad = document.getElementById('notepad');

notepad.value = localStorage.getItem('notepadContent') || '';

notepad.addEventListener('input', () => {
    localStorage.setItem('notepadContent', notepad.value);
});