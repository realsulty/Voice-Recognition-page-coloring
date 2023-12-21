const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition; // both these are window properties

const rec = new SpeechRecognition(); // rec is your variable and speech is a built in method

rec.lang = 'en-US';
rec.continuous = true; // This one means to keep tracking of what you saying 

rec.onresult = function (e) {
    const acceptedColors = [ // Try to make this one dynamic
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'pink',
        'brown',
        'white',
        'maroon',
        'black',
        'gray',
        'sliver',
        'purple',
    ];


for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    if (acceptedColors.includes(script)) {
        document.body.style.backgroundColor = script;
        document.body.style.color = 'black'
    } 
    
    if (script === 'black' || script ==='green'|| script ==='blue'|| script ==='purple') {
        document.body.style.color = 'white'

    } else {
        showAlert('PLease Say a Valid Color')
        // alert('Say a valid color')
    }
  }
};

rec.start();

function showAlert(message) { 
    const alerEl = document.createElement('div');
    alerEl.classList.add('alert'); 
    alerEl.appendChild(document.createTextNode(message));
    document.querySelector('#alert').appendChild(alerEl);

    setTimeout(()=> alerEl.remove(),3000)
}