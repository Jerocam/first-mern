import {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([
    {
      title: '',
      genre: '',
      year: ''
    }
  ])

  const [movie, setMovie] = useState(
    {
      title: '',
      genre: '',
      year: ''
    }
  )

  useEffect(() => {
    fetch('/movies').then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setMovies(jsonRes))
  })

  function handleChange(e) {
    const {name, value} = e.target;
    setMovie(prevInput => {
      return(
        {
          ...prevInput,
          [name]: value
        }
      )
    })
  }

  function addMovie(e) {
    e.preventDefault();

    let empt1 = document.forms["Form"]["title"].value;
    let empt2 = document.forms["Form"]["genre"].value;
    let empt3 = document.forms["Form"]["year"].value;

    if (empt1 == null || empt1 === "" || empt2 == null || empt2 === ""|| empt3 == null || empt3 === "") {
      alert("Please Fill All Required Field");
      return false;
    }
    else if(isNaN(empt3)){
      alert('Error, Please enter only number');
    }
    else {
      alert("New Movie Added!");
      const newMovie = {
        title: movie.title,
        genre: movie.genre,
        year: movie.year
      }
      axios.post('/newmovie', newMovie);
    }
  }

  function deleteMovie(id) {
    axios.delete('/delete/' + id);
    alert("movie deleted");
  }

  return (
    <div className="App">
      <h1>MERN APPLICATION</h1>
      <h2>Add Movie</h2>
      <form name="Form">
        <label>Title <input onChange={handleChange} name="title" value={movie.title} /></label>
        <label>Genre <input onChange={handleChange} name="genre" value={movie.genre} className="rt"/></label>
        <label>Year <input onChange={handleChange} name="year" value={movie.year} className="rt"/></label>
        <button onClick={addMovie}>Add Movie</button>
      </form>

      <div className="grid-container">
      {movies.map((movie, key) => {
        return (
            <div key={key} className="grid-item">
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
              <p>{movie.year}</p>
              <button onClick={() => deleteMovie(movie._id)} className="btnDel">Delete</button>
            </div>
        ) 
      })}
      </div>
    </div>
  );
}

export default App;
