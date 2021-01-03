// selectors

const textArea = document.querySelector('textarea');
const inputKeys = document.querySelector('.wrapper');
// const actionKeys = document.querySelector('.action-key');

// listeners

// inputKeys.addEventListener('click', handleInput)
inputKeys.addEventListener('click', handleInput)

// actions

// let CAPS_LOCK = false;

function handleInput(event) {

    const item = event.target;
    const item_class = item.classList.value;

    if (item_class.includes('input-key')){
       insertText(item.innerText)
    }else if(item_class.includes('backspace')){
        backspaceAction()
    }else if(item_class.includes('enter')){
        //todo
        enterAction()
    }else if(item_class.includes('caps')){
        toggleCapsLock(item);
    }else if(item_class.includes('tab')){
        insertText(item.innerText)
    }

   
    
}

function insertText(text) {
    if (textArea.value == 'Type here'){
        textArea.innerText = '';
    }
    if (text == '_____space____'){
        textArea.innerText = textArea.value + " ";
    }else if(text == 'tab'){
        textArea.innerText = textArea.value + "        "
    }else{
        textArea.innerText = textArea.value + text;
    }

    // var start = textArea.selectionStart;

    
    let start = textArea.selectionStart
    let end = textArea.selectionEnd;
    // end=  end+ textArea.value.length;
    // textArea.setSelectionRange(start, end)
    
    // console.log(start , textArea.selectionEnd)
    textArea.focus();
    textArea.selectionEnd = end+ textArea.value.length;   
   
}

function backspaceAction() {
    if (textArea.value == ''){
        return
    }
    current_text = textArea.value;
    textArea.innerText = current_text.slice(0,-1)

    let start = textArea.selectionStart
    let end = textArea.selectionEnd;
    // end=  end+ textArea.value.length;
    // textArea.setSelectionRange(start, end)
    
    // console.log(start , textArea.selectionEnd)
    textArea.focus();
    textArea.selectionEnd = end+ textArea.value.length; 
}

function enterAction(){
    console.log('enter action')
}

function toggleCapsLock(item){

    if (item.getAttribute('id') == 'off'){
        item.setAttribute('id','on');
    }else{
        item.setAttribute('id','off');
        
    }
    const characterElements = document.querySelectorAll('.char')
    // console.log(characterElements);
    for(let element of characterElements){
    
        console.log(element.innerText)
        if (item.getAttribute('id') == 'on'){
            element.innerText =  element.innerText.toUpperCase();
            item.style.backgroundColor = 'green';
        }else{
            element.innerText =  element.innerText.toLowerCase();
            item.style.backgroundColor = 'white';
        }
    }
}