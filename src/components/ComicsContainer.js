import Comic from "./Comic"
import App from "./App"


function ComicsContainer({comics, removeComic}) {
  console.log({comics})
  return (
    
  <>
    {comics.map(comic => <Comic key={comic.id} comic={comic} removeComic={removeComic}/> )}
    
    </>
)

};
export default ComicsContainer
