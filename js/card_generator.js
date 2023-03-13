function generateCard(nomeTuna, nomeCaloiro, imagem_pessoal,nomeCivil, instrumento, imageSrc) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    
    if(imagem_pessoal != ""){
    const cardImage = document.createElement("img");
    cardImage.src = `imagens/caloiros/${imagem_pessoal}.jpg`;
    cardImage.alt = nomeTuna;
    cardImage.classList.add("card-imagem_pessoal");
    cardContainer.appendChild(cardImage);
    }

    const cardImagemLateral = document.createElement("img");
    cardImagemLateral.src = imageSrc;
    cardImagemLateral.alt = instrumento;
    cardImagemLateral.classList.add("card-imagem_lateral");
  
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    const cardNomeCivil = document.createElement("h2");
    cardNomeCivil.textContent = nomeCivil;
    cardNomeCivil.classList.add("card-nomeCivil");

  
    const cardNomeTuna = document.createElement("h2");
    cardNomeTuna.textContent = nomeTuna;
    cardNomeTuna.classList.add("card-nomeTuna");
  
    const cardNomeCaloiro = document.createElement("p");
    cardNomeCaloiro.textContent = nomeCaloiro
    cardNomeCaloiro.classList.add("card-nomeCaloiro");
  
    const cardInstrumento = document.createElement("p");
    cardInstrumento.textContent = `Instrumento: ${instrumento}`;
    cardInstrumento.classList.add("card-instrumento");
  
    cardInfo.appendChild(cardNomeTuna);
    cardInfo.appendChild(cardNomeCaloiro);
    cardInfo.appendChild(cardNomeCivil);
    cardInfo.appendChild(cardInstrumento);


    cardContainer.appendChild(cardImagemLateral);
    cardContainer.appendChild(cardInfo);
  
    return cardContainer;
  }

  

  function createCards(baseDados){
    fetch('base_dados.csv')
    .then(response => response.text())
    .then(data => {
    const parsedData = Papa.parse(data, { header: true }).data;

    console.log(parsedData);
    console.log(parsedData[0].nomeTuna);

    for (let i = 0; i < parsedData.length; i++) {
        const card = generateCard(
        parsedData[i].nomeTuna,
        parsedData[i].nomeCaloiro,
        parsedData[i].imagem_pessoal,
        parsedData[i].nomeCivil,
        parsedData[i].instrumento,
        parsedData[i].imagem_lateral
        );
        
    const cardContainer = document.getElementById("card-container");
    cardContainer.appendChild(card);

    if(i==0){
        var text = document.createElement("div");
        text.id = "Titulo-Hierarquia"
        text.innerHTML = "Ensaiador FRACAE";
        text.style.marginTop = "20px";
        cardContainer.appendChild(text);
    }

    if (i == 1){
        var text = document.createElement("div");
        text.id = "Titulo-Hierarquia"
        text.innerHTML = "Tarefeiro FRACAE";
        text.style.marginTop = "20px";
        cardContainer.appendChild(text);
    }

    if (i == 2){
        var text = document.createElement("div");
        text.id = "Titulo-Hierarquia"
        text.innerHTML = "Atuador FRACAE";
        text.style.marginBottom = "20px";
        text.style.marginTop = "20px";
        cardContainer.appendChild(text);
    }

    if (i == 3){
        var text = document.createElement("div");
        text.id = "Titulo-Hierarquia"
        text.innerHTML = "Caloiros";
        text.style.marginTop = "20px";
        cardContainer.appendChild(text);
    }
}
  });

  



  }