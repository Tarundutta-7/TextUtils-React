import React, {useState} from 'react'

export default function About() {

    const[myStyle, setMyStyle]= useState({
        
                color: 'black',
                backgroundColor:'white'
    })


  return (
    <div className = "container" style={myStyle}>
    <h1 className="my-3">About us</h1>
      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body"style={myStyle}>
        TextUtils gives you a way  to analyze your text quickly and efficiently.
      </div>
    </div>
  </div>
  <div class="accordion-item"style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body"style={myStyle}>
        TextUtils is free character counter tool that provide instant character count and word count statistics for given text. Thus it is suitable for writing text with word/character limit
      </div>
    </div>
  </div>

</div>

    </div>
  )
}
