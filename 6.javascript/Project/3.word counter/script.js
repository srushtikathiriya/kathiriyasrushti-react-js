function calculateLength() {
    const word = document.getElementById("wordInput").value.trim();
  
    const length = word.length;
  
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Length of the word "${word}": ${length}`;
  }