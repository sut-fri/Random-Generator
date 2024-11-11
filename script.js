function generate() {
    let name = document.getElementById("name").value.trim();
    if (!name) {
        name = "diva";
    }
    const teas = ["earl gray", "english breakfast", "lavender", "mint", "matcha", "hibiscus", "jazmin"];
    const colors = ["pink", "green", "blue", "black", "purple", "orange"];
    const whatsTheTeaSis = Math.floor(Math.random() * teas.length);
    const flavor = teas[whatsTheTeaSis];
    const bold = Math.random() > 0.5;
    const italic = Math.random() > 0.5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const theTea = `${name}, you should brew ${flavor} tea`;
    let yourTea = document.getElementById("result");
    if (!yourTea) {
        yourTea = document.createElement("div");
        yourTea.id = "result";
        document.body.appendChild(yourTea);
    }
    yourTea.style.fontWeight = bold ? "bold" : "normal";
    yourTea.style.fontStyle = italic ? "italic" : "normal";
    yourTea.style.color = color;
    yourTea.textContent = theTea;
}
