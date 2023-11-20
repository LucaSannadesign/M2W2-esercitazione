const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  };
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  };
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  };
  
  const prices = [34, 5, 2];
  const shippingCost = 50;
  
  let utenti = [];
  utenti.push(marco);
  utenti.push(paul);
  utenti.push(amy);
  
  utenti.forEach((utente) => {
    let scontoAmbassador = 0;
  
    if (utente.isAmbassador) {
      scontoAmbassador = 0.3; // Sconto del 30% per gli ambassador
    }
  
    let totaleSenzaSpedizione = prices.reduce((acc, prezzo) => acc + prezzo, 0) * (1 - scontoAmbassador);
    
    // Verifica se il totale senza spedizione è maggiore o uguale a 100
    let spedizioneGratuita = totaleSenzaSpedizione >= 100;
  
    // Calcola il costo finale considerando la spedizione gratuita o il costo fisso di spedizione
    let costoFinale = spedizioneGratuita ? totaleSenzaSpedizione : totaleSenzaSpedizione + shippingCost;
  
    // Stampa delle informazioni sull'utente
    console.log(`${utente.name} ${utente.lastName} ${utente.isAmbassador ? "è" : "non è"} un ambassador. Il costo totale del carrello è ${costoFinale} euro.`);
  });
  
  // Creazione di un array di utenti ambassador
  let utentiAmbassador = utenti.filter((utente) => utente.isAmbassador);
  
  console.log("Array di utenti ambassador:", utentiAmbassador);
  