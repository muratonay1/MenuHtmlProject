
console.log("Projects.js yüklendi.");

document.getElementById('fetch-ip-btn').addEventListener('click', function () {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipElement = document.getElementById('ip-address');
            if (ipElement) {
                ipElement.textContent = 'IP Adresiniz: ' + data.ip;
            }
        })
        .catch(error => {
            console.error('IP adresi alınamadı:', error);
            const ipElement = document.getElementById('ip-address');
            if (ipElement) {
                ipElement.textContent = 'IP adresi alınamadı';
            }
        });
});