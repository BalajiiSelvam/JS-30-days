document.getElementById('analyze-btn').addEventListener('click', function() {
    const text = document.getElementById('text-input').value;
    const charCount = text.length;
    const specialCharCount = (text.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length;
    const whitespaceCount = (text.match(/\s/g) || []).length;
    const wordCount = (text.trim().split(/\s+/).filter(Boolean)).length;

    document.getElementById('char-count').textContent = charCount;
    document.getElementById('special-char-count').textContent = specialCharCount;
    document.getElementById('whitespace-count').textContent = whitespaceCount;
    document.getElementById('word-count').textContent = wordCount;

    document.getElementById('results').style.display = 'block'; 
});
