const gombalSentences = [
    "Kamu itu kayak matahari, karena selalu menerangi hidupku.",
    "Jika cinta itu sebuah lukisan, maka kamu adalah seniman terhebat bagiku.",
    "Aku selalu tersenyum ketika berada di dekatmu, karena kamu adalah alasan tersenyumku.",
    "Cintaku kepadamu seperti kopi, semakin lama semakin kuat.",
    "Bersamamu, hidupku terasa seperti dongeng yang indah."
];

function generateGombal() {
    const gombalText = document.getElementById("gombalText");
    const randomIndex = Math.floor(Math.random() * gombalSentences.length);
    gombalText.innerHTML = gombalSentences[randomIndex];
}
