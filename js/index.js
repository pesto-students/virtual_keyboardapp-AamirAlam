// selectors

const textArea = document.querySelector('textarea');
const inputKeys = document.querySelector('.wrapper');
// const actionKeys = document.querySelector('.action-key');

// listeners

// inputKeys.addEventListener('click', handleInput)
inputKeys.addEventListener('click', handleInput)

// actions

function handleInput(event) {

    const item = event.target;
    const item_class = item.classList.value;

    if (item_class.includes('input-key')){
       insertText(item.innerText)
    }else if(item_class.includes('backspace')){
        backspaceAction()
    }else if(item_class.includes('enter')){
        enterAction()
    }

   
    
}

function insertText(text) {
    if (textArea.value == 'Type here'){
        textArea.innerText = '';
    }
    if (text == '_____space____'){
        textArea.innerText = textArea.value + " ";
    }else{
        textArea.innerText = textArea.value + text;
    }

    // var start = textArea.selectionStart;

    
    let start = textArea.selectionStart
    let end = textArea.selectionEnd;
    end=  end+ textArea.value.length;
    textArea.setSelectionRange(start, end)
    
    // console.log(start , textArea.selectionEnd)
    textArea.focus()   
   
}

function backspaceAction() {
    if (textArea.value == ''){
        return
    }
    current_text = textArea.value;
    textArea.innerText = current_text.slice(0,-1)
}

function enterAction(){

}