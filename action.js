async function copyEmailToClipboard() {
    try {
        await navigator.clipboard.writeText('ckchancm@gmail.com');
        document.getElementById('copyEmailToClipboard').innerText = 'Copied!';
        console.log('Email copied to clipboard!');
        setTimeout(function(){document.getElementById('copyEmailToClipboard').innerHTML = '<i class="fas fa-envelope"></i> Contact'},2000)
    } catch (err) {
        console.error('Failed to copy email: ', err);
    }
}