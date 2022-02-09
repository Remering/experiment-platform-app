import * as React from 'react'

const Notebook: React.FC = () => {
    return (
        <iframe 
            src="http://localhost:8888/notebooks/notebooks/Untitled.ipynb?token=7807cb10a5b2a2208ec630c7fbde4a3c955d87082c790aea"
            width='100%'
            height='100%'
            scrolling="no"
        />
    )
}

export default Notebook