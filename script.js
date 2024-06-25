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

// Generate random phrase
function getRandomPhrase(){
    return phrases [Math.floor(Math.random() * phrases.length)];
}

function generatePoem(){
    const lineCount = document.getElementById('lineCount').value;
    let poem ='';
    for (let i=0; i < lineCount; i++) {
        poem += getRandomPhrase() + '<br>';
    }
    document.getElementById('poem').innerHTML = poem;
}

// Add custom phrase
document.getElementById('addPhrase').addEventListener('click', addCustomPhrase);

function addCustomPhrase(){
    const customPhrase = document.getElementById('customPhrase').value;
    if(customPhrase.trim() !== ''){
        phrases.push(customPhrase.trim());
        document.getElementById('customPhrase').value = '';
        alert('Phrase added succesfully!');
    } else{
        alert('Please enter a valid phrase.');
    }
}

// Download Poem button
document.getElementById('download').addEventListener('click', downloadPoem);

function downloadPoem() {
    const poem = document.getElementById('poem').innerHTML.replace(/<br>/g, '\n');
    const blob = new Blob([poem], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'poem.txt';
    link.click();
}

// Speak function
document.getElementById('speak').addEventListener('click', speakPoem);

function speakPoem(){
    const poemText = document.getElementById('poem').innerText;
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(poemText);
    synth.speak(utterance);
}