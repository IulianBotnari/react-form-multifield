import { useEffect, useState } from 'react'


import './App.css'
const aritcleTitle = [

]

function App() {

  const [article, setArticle] = useState(aritcleTitle)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [img, setImg] = useState('')
  const [html, setHtml] = useState('')
  const [js, setJs] = useState('')
  const [published, setPublished] = useState('')
  const [search, setSearch] = useState('')
  const [filteredArticle, setFilteredArticle] = useState([])
  // const [newBody, setNewBody] = useState('')
  useEffect(() => {



    const searchArticle = article.filter((article) => article.title.includes(search))




    setFilteredArticle(searchArticle)



  }, [article, search])


  function getArticle(e) {
    e.preventDefault()

    setArticle(

      [
        ...article,
        {
          title: title,
          body: body,
          img: img,
          html: html,
          js: js,
          published: published
        }

      ]
    )

    e.target.reset()
  }


  function handleTrashTaskClick(e) {
    e.preventDefault()
    const articleIndex = Number(e.target.getAttribute('data-index'))


    const removeArticle = filteredArticle.filter((title, index) => index !== articleIndex)


    setArticle(removeArticle)


  }

  return (
    <>
      <div className="container">
        <header className="header d-flex justify-content-between align-items-center">
          <div>
            <h1>Blog App</h1>
            <p>Un semplice blog creato con React</p>

          </div>

          <div className="mb-3 d-flex justify-content-end">

            <input
              type="search"
              className="form-control"
              id='search'
              placeholder="Search.."
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={search}
              onChange={e => setSearch(e.target.value)}

            />
          </div>

          <hr />
        </header>

        <form onSubmit={getArticle} className='mb-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo Articolo</label>
            <input type="text" className="form-control" id="title" placeholder="Titolo Articolo" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Corpo Articolo</label>
            <textarea className="form-control" id="body" rows="3" value={body} onChange={e => setBody(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <textarea className="form-control" id="image" rows="1" value={img} onChange={e => setImg(e.target.value)} />
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="html" id="html" onChange={e => setHtml(e.target.value)} />
            <label className="form-check-label" htmlFor="html">
              Html
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="js" id="js" onChange={e => setJs(e.target.value)} />
            <label className="form-check-label" htmlFor="js">
              js
            </label>
          </div>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="published" id="published" onChange={e => setPublished(e.target.value)} />
            <label className="form-check-label" htmlFor="published">
              published
            </label>
          </div>

          <button type='submit' className="btn btn-primary">Post</button>
        </form>

        <div className='article'>
          {filteredArticle.map((article, index) => <div key={index} ><h2>Titolo: {article.title}</h2><p>Contentuto: {article.body}</p>
            <p>Tags: {article.html} , {article.js}</p>
            <img src={article.img} />
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
