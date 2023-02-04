import './App.css';
import { useState } from 'react';
import { marked } from 'marked';
import { initialState } from './componentes/state';

function App() {
  const [text, setText]=useState(initialState)
  const [edit, setEdit]= useState('')
  const [previ, setPrevi]= useState('')
  const [editText, setEditText]= useState('')
  const [ arrows, setArrows] = useState(<i class="fa fa-arrows-alt"></i>)

  const changePrevi=()=>{
    if(edit === ''){
      setPrevi('expand')
      setEdit('hidden')
      setArrows(<i class="fa fa-compress"></i>)
    }else{
      setPrevi('')
      setEdit('')
      setArrows(<i class="fa fa-arrows-alt"></i>)
    }
  }

  const changeEdit=()=>{
    if(previ === ''){
      setPrevi('hidden')
      setEditText('textExpand')
      setEdit('expand')
      setArrows(<i class="fa fa-compress"></i>)
    }else{
      setPrevi('')
      setEditText('')
      setEdit('')
      setArrows(<i class="fa fa-arrows-alt"></i>)
    }
  }

  marked.setOptions({
    breaks: true
  })

  return (
    <div id='app'>
      <div className={`editorWrapped ${edit}`}>
        <div className='toolbar'>
          <span>Editor</span><span onClick={changeEdit}>{arrows}</span>
        </div>
        <textarea
        className={`textarea ${editText}`} 
        id='editor'
        onChange={(e)=>setText(e.target.value)}
        value={text}
        ></textarea>
      </div>
      <div className={`previewWrapped ${previ}`}>
        <div className='toolbar'>
          <span>Previewer</span><span onClick={changePrevi}>{arrows}</span>
        </div>
        <div 
        id='preview' 
        dangerouslySetInnerHTML={
          {__html: marked(text)}
          }
        ></div>
      </div>
    </div>
  )
}

export default App;
