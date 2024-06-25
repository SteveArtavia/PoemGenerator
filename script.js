document.getElementById('generate').addEventListener('click', generatePoem);

const phrases = [
    'The moon shines in the sky',
    'The wind whispers secrets',
    'The waves sing to the sea',
    "The stars dance in the night",
    "The sun paints the horizon",
    "The trees tell stories",
    "The rain caresses the earth",
    "Silence speaks in the dark",
    "The flowers bloom with grace",
    "The mountains stand tall",
    "The river flows gently",
    "The birds sing their melody",
    "The clouds drift lazily",
    "The forest hums with life",
    "The night carries dreams",
    "The dawn brings hope",
    "The twilight embraces the day",
    "The shadows play on the walls",
    "The breeze carries laughter",
    "The fire crackles warmly",
    "The leaves rustle softly",
    "The stars guide the lost",
    "The sea holds mysteries",
    "The meadow dances in the wind",
    "The sky blushes at dusk",
    "The earth breathes quietly",
    "The hills echo whispers",
    "The fog cloaks the morning",
    "The dew kisses the petals",
    "The sunflowers follow the sun"
];

function getRandomPhrase(){
    return phrases [Math.floor(Math.random() * phrases.length)];
}

function generatePoem(){
    let poem ='';
    for (let i=0; i<4; i++) {
        poem += getRandomPhrase() + '<br>';
    }
    document.getElementById('poem').innerHTML = poem;
}