import ComicsContainer from "./ComicsContainer"
import ComicForm from "./ComicForm"
import { useEffect, useState } from "react";


function App() {

  const [comics, setComics] = useState([])

  useEffect(() => {
    fetch("http://localhost:8004/comics")
      .then(r => r.json())
      .then(data => setComics(data))
  }, [])

function addComic(newComic){
  //console.log(newComic)
  setComics([...comics, newComic])
}
function removeComic(comicToRemove){
  const filteredComics = comics.filter(comic => comic.id !== comicToRemove.id)
  setComics(filteredComics)

}

  return (
    <div className="App">

      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">

        <div className="flex-container">
        <ComicsContainer comics={comics} removeComic={removeComic}/>
        </div>

        <div className="sidebar">
          <ComicForm addComic={addComic}/>
        </div>

      </div>


    </div>
  );
}

export default App;
