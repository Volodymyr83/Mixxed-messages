const nounArray = [
    {word:'I', person:'first', number: 'singular'},
    {word:'we', person:'first', number: 'plural'},
    {word:'you', person:'first', number: 'plural'},
    {word:'he', person:'second', number: 'singular'},
    {word:'she', person:'second', number: 'singular'},
    {word:'it', person:'second', number: 'singular'},
    {word:'they', person:'second', number: 'plural'},
    {word:'a dog', person:'second', number: 'singular'},
    {word:'the sharks', person:'second', number: 'plural'},
    {word:'tomatos', person:'second', number: 'plural'},
    {word:'Jack', person:'second', number: 'singular'},
    {word:'a see', person:'second', number: 'singular'},
    {word:'Mars', person:'second', number: 'singular'},
    {word:'The USA', person:'second', number: 'singular'}
]
const verbArray = [
    {first:'go', second:'went', third: 'gone', person2: 'goes' },
    {first:'delay', second:'delayed', third: 'delayed', person2: 'delays' },
    {first:'jump', second:'jumped', third: 'jumped', person2: 'jumps' },
    {first:'swim', second:'swam', third: 'swum', person2: 'swims' },
    {first:'be', secondSingular:'was', secondPlural: 'were', third: 'been', person1: 'am', person2: 'is', person2Plural: 'are' },
    {first:'claim', second:'claimed', third: 'claimed', person2: 'claims' },
    {first:'cut', second:'cut', third: 'cut', person2: 'cuts' },
    {first:'exist', second:'existed', third: 'existed', person2: 'exists' },
    {first:'run', second:'ran', third: 'run', person2: 'runs' },
    {first:'allow', second:'allowed', third: 'allowed', person2: 'alllows' },
    {first:'steal', second:'stole', third: 'stolen', person2: 'steals' },
    {first:'shine', second:'shone', third: 'shone', person2: 'shines' },
    {first:'work', second:'worked', third: 'worked', person2: 'works' },
    {first:'eat', second:'ate', third: 'eaten', person2: 'eats' }    
]

const conjunctionArray = [
    'But',
    'Suddenly',
    'And',
    'Then',
    'After this,',
    'For sure,',
    'Really,'
]

const verbTenses = [
    'Present simple',
    'Past simple',
    'Future simple',
    'Present perfect'
]

const randomlyChoose = array => {
    const len = array.length;
    return array[Math.floor(Math.random() * len)]
}

function creatMessage(){
    let conjunction = randomlyChoose(conjunctionArray)
    let noun = randomlyChoose(nounArray);
    let verb = randomlyChoose(verbArray);
    const tense = randomlyChoose(verbTenses);
    if (verb.first === 'be'){
        switch(tense){
            case 'Present simple':
                 if (noun.number === 'singular') {
                     if (noun.person === 'first'){
                        verb = verb.person1;
                     }
                     else {
                         verb = verb.person2;
                     }                      
                 }
                 else {
                       verb = verb.person2Plural;
                    }              
            break;
            case 'Past simple':
                if (noun.number === 'singular') {                    
                       verb = verb.secondSingular;                              
                }
                else {
                      verb = verb.secondPlural;
                   }               
            break;
            case 'Future simple':
                 verb = 'will ' + verb.first;
            break;
            case 'Present perfect':
                verb = verb.third;
            break;  
        }
    }
    else {
        switch(tense){
            case 'Present simple':
                 if (noun.person === 'second' && noun.number === 'singular') {
                     verb = verb.person2;                 
                 }
                 else {
                       verb = verb.first;
                    }              
            break;
            case 'Past simple':
                verb = verb.second;            
            break;
            case 'Future simple':
                 verb = 'will ' + verb.first;
            break;
            case 'Present perfect':
                if (noun.person === 'second' && noun.number === 'singular') {
                    verb ='has ' + verb.third;                 
                }
                else {
                    verb ='have ' + verb.third;
                   } 
            break;  
        }

    }
    return conjunction + ' ' + noun.word + ' ' + verb + '.';
}

let message = '';
for (let index = 0; index < 100; index++) {
   message += creatMessage() + ' ';     
}
console.log(message);
