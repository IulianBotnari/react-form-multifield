import { useState } from 'react'


import './App.css'
const aritcleTitle = [

]

function App() {

  const [title, setTitle] = useState(aritcleTitle)
  const [newTitle, setNewTitle] = useState()
  const [body, setBody] = useState('')
  // const [newBody, setNewBody] = useState('')


  function getTitle(e) {
    e.preventDefault()

    console.log(title);


    setTitle(

      [
        ...title,
        {
          title: newTitle,
          body: body
        }

      ]
    )




    console.log(title);
    e.target.reset()
  }


  function handleTrashTaskClick(e) {
    e.preventDefault()
    const articleIndex = Number(e.target.getAttribute('data-index'))
    console.log(articleIndex);

    const removeArticle = title.filter((title, index) => index !== articleIndex)


    setTitle(removeArticle)


  }

  return (
    <>
      <div className="container">

        <form onSubmit={getTitle} className='mb-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo Articolo</label>
            <input type="text" className="form-control" id="title" placeholder="Titolo Articolo" onChange={e => setNewTitle(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Corpo Articolo</label>
            <textarea className="form-control" id="body" rows="3" onChange={e => setBody(e.target.value)} />
          </div>
          <button type='submit' className="btn btn-primary">Post</button>
        </form>

        <div className='article'>
          {title.map((articleTitle, index) => <div key={index} ><h2>Titolo: {articleTitle.title}</h2><p>Contentuto: {articleTitle.body}</p>
            <button type="submit" className="btn btn-primary" data-index={index} onClick={handleTrashTaskClick}>
              Remove task
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
              </svg>
            </button>
          </div>)}



        </div>
      </div>
    </>
  )
}

export default App
