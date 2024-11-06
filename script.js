const quotesJSON = 'https://raw.githubusercontent.com/pushkarydv/quotier-readme-quotes/main/quotes.json';
let quotes;

const fetchQuotes = () => {
    return $.ajax({
        url: quotesJSON,
        success: function(data) {
            quotes = JSON.parse(data);
        }
    })
}

const randomPick = () => {
    return Math.floor(Math.random() * quotes.length);
}

const displayQuote = () => {
    const quoteIndex = randomPick();
    const currentQuote = quotes[quoteIndex];

    $('.quote-text').animate({ opacity: 0}, 200, () => {
        $('#text').text(currentQuote.quote);
        $('.quote-text').animate({ opacity: 1 }, 200)
    });
    $('#author').animate({ opacity: 0}, 200, () => {
        $('#author').text(currentQuote.author);
        $('#author').animate({ opacity: 1 }, 200)
    });
    $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + currentQuote.quote + '" ' + currentQuote.author)
    );
}

$(document).ready(function() {
    fetchQuotes().then(() => {
        displayQuote();
    });
});