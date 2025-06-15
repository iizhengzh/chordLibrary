const ChordBox = vexchords.ChordBox;
const chords = [];
function init(chart) {
    var container = document.getElementById('chordList');
    container.innerHTML = '';
    // Display preset chords (open chords)
    for (var i = 0; i < chart.length; ++i) {
        for (var j = 0; j < chart[i].chords.length; ++j) {
            container.append(createChordElement(chart[i].chords[j]));
        }
    }
    chords.forEach(chord => {
        new ChordBox(chord.el, { width: 130, height: 150, defaultColor: '#444' }).draw(chord.struct);
    });
}

function createChordElement(chordStruct) {
    const chordbox = document.createElement('div');
    chordbox.classList.add('chord');
    const chordcanvas = document.createElement('div');
    const chordname = document.createElement('div');
    chordname.classList.add('chordname');
    chordbox.append(chordcanvas);
    chordbox.append(chordname);
    chordname.append(chordStruct.name);

    chords.push({ el: chordcanvas, struct: chordStruct });

    return chordbox;
}

const navLinks = document.querySelectorAll('nav a[href="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const chordName = this.dataset.chord;
        // Get chord data from JSON files
        async function fetchChords(filePath) {
            try {
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error('Network response failed');
                }
                return await response.json();
            } catch (error) {
                console.error('Error fetching chord data:', error);
                return [];
            }
        }

        switch (chordName) {
            case 'C':
                fetchChords('chords/cChord.json').then(data => init(data));
                break;
            case 'C#/Db':
                fetchChords('chords/dbChord.json').then(data => init(data));
                break;
            case 'D':
                fetchChords('chords/dChord.json').then(data => init(data));
                break;
            case 'D#/Eb':
                fetchChords('chords/ebChord.json').then(data => init(data));
                break;
            case 'E':
                fetchChords('chords/eChord.json').then(data => init(data));
                break;
            case 'F':
                fetchChords('chords/fChord.json').then(data => init(data));
                break;
            case 'F#/Gb':
                fetchChords('chords/gbChord.json').then(data => init(data));
                break;
            case 'G':
                fetchChords('chords/gChord.json').then(data => init(data));
                break;
            case 'G#/Ab':
                fetchChords('chords/abChord.json').then(data => init(data));
                break;
            case 'A':
                fetchChords('chords/aChord.json').then(data => init(data));
                break;
            case 'A#/Bb':
                fetchChords('chords/bbChord.json').then(data => init(data));
                break;
            case 'B':
                fetchChords('chords/bChord.json').then(data => init(data));
                break;
            default:
                fetchChords('chords/cChord.json').then(data => init(data));
        }
    });
});
window.onload = function () {
    const cLink = document.querySelector('nav a[data-chord="C"]');
    if (cLink) {
        cLink.click();
    }
};