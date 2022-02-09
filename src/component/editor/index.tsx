import * as React from 'react'

import { Controlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/python/python.js'
import 'codemirror/addon/selection/active-line'

import 'codemirror/addon/fold/foldgutter.css' 
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'  
import 'codemirror/addon/fold/brace-fold.js' 
import 'codemirror/addon/fold/comment-fold.js'

import 'codemirror/addon/scroll/simplescrollbars.js'
import 'codemirror/addon/scroll/simplescrollbars.css'

const EditorRoute: React.FC = () => {
    
    const [state, setState] = React.useState('')
    

    return (
        <CodeMirror
            value={state}
            options={{
                mode: 'python',
                theme: 'material',
                lineNumbers: true,

            }}
            onBeforeChange={(editor, data, value) => {
                setState(value)
            }}
        >
            
        </CodeMirror>
    )
}

export default EditorRoute