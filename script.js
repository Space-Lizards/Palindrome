document.body.onload = addElements;
function addElements() 
{
  const mainDiv = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const body = document.getElementById("main_div");
  
  mainDiv.innerText = "Hello! is Palindrome";

  attrButton = {
    type: "button",
    id: "buttonPolyn",
  }

  attrInput = {
    type: "number",
    id: "inputPolyn",
  }

  function setAttributies(element, attributes)
  {
    for(const [key, value] of Object.entries(attributes))
    {
      element.setAttribute(key, value);
    }
  }
  setAttributies(button, attrButton);
  setAttributies(input, attrInput);

  button.innerText = "GO!";
  input.placeholder = "Number is: ";

  body.appendChild(mainDiv);
  body.appendChild(input);
  body.appendChild(button);

  function handlerPolyndrome(inputValue, resultValue) {
    return function()
    {
      const oldPolyndrome = document.createElement('div');
      const resultPolyndrome = document.createElement('div');
      
      oldPolyndrome.innerText = "is your number: " + inputValue(); //dynamical
      resultPolyndrome.innerText = "result is: " + resultValue; //const
      body.appendChild(oldPolyndrome);
      body.appendChild(resultPolyndrome);
    };
  }

  function polyndrome()
  {
    const inputIdenty = document.querySelector('#inputPolyn');
    const buttonIenty = document.querySelector('#buttonPolyn');
    
    const inputValue = () => inputIdenty.value; //for update input
    let resultValue = false; //start state

    buttonIenty.addEventListener('click', function()
    {
      const string = String(parseInt(inputValue())); //parse to string
      const reversedString = string.split('').reverse().join('');
      string === reversedString ? resultValue = true : resultValue = false; 
      
      const handler = handlerPolyndrome(inputValue, resultValue);
      handler();
    });
  }
  polyndrome();
}