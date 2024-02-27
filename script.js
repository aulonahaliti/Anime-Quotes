function differentAnimeQuotes() {
    fetch('https://animechan.xyz/api/random')
    .then(response => response.json())
    .then(quote => {
        const quoteContainer = document.getElementById('random-quotes');
        quoteContainer.innerHTML = `
        <h1> Anime: ${quote.anime} </h1>
        <p> Character: ${quote.character} </p>
        <p> Quote: ${ quote.quote} </p>
        `
    } );
};