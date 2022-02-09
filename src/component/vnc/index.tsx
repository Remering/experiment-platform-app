import * as React from 'react'
// import {VncScreen} from 'react-vnc'
const VncRoute: React.FC = () => {
    // return (
    //     <VncScreen
    //         url='ws://127.0.0.1:1080'
    //         scaleViewport
    //     />
    // )
    return (
        <iframe
            width='100%'
            height='100%'
            allowFullScreen
            src='http://localhost:1080'   
        />

    )
}

export default VncRoute