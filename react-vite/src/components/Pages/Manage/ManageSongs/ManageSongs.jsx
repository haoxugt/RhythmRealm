import { useDispatch, useSelector } from "react-redux";
import { useEffect, useContext, useState } from "react";
import { getAllSongs } from "../../../../redux/song";
import { getAllAlbums } from "../../../../redux/album"
import { MusicContext } from "../../../../context/MusicContext";
import SongList from "../../../Songs/SongList/SongList";
import { useNavigate } from "react-router-dom";
import { IndexContext } from "../../../../context/IndexContext";
import "./ManageSongs.css"
import manageSongCover from './ManageSongs.png'
import SongDropdown from "../../../SongDropdown/SongDropdown"


function ManageSongs() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [songList, setSongList] = useContext(MusicContext);
  const [currentSong, setCurrentSong] = useContext(IndexContext);
  const [playing, setPlaying] = useState(false);
  const [counter, setCounter] = useState(0);
  if (currentSong) currentSong


  if (!songList) songList

  // const user = useSelector(state => state.session.user)
  // if (!user) navigate('/')
  // const users = useSelector(state => state.user)
  const albumState = useSelector(state => state.album);
  const songState = useSelector(state => state.song);
  const songs = Object.values(songState?.Songs)

  useEffect(() => {
    dispatch(getAllSongs())
    dispatch(getAllAlbums())
  }, [dispatch])
  // // console.log(songs)


  // Switch between play and pause function:
  // const handleClick = () => {
  //   if (counter == 0) {
  //     // setSongList(values);
  //     setSongList([]);
  //     setCurrentSong(0);
  //     setPlaying(true);
  //   } else {
  //     setPlaying(!playing);
  //     const audio = document.getElementsByTagName('audio')[0]
  //     if (playing) {
  //       audio.pause()
  //     }
  //     if (!playing) {
  //       audio.play()
  //     }
  //   }
  //   setCounter(counter + 1);
  // }

  return (
    <section className="manage-song-container">
      <div className="manage-songs-top">
        <div className="songs-header">
          <img className='manage-song-cover-img' src={manageSongCover} alt="manage-song-cover-img" />
          <h1 className='manage-song-title'>Manage ssssongs</h1>
        </div>
        <div className="song-list-info-header">
          <p>#</p>
          <p>Title</p>
          <p>Album</p>
          <p>Duration</p>
        </div>
      </div>
      {/* <div className="song-list-symbols">
          <div className="song-play-button" onClick={() => handleClick()}>
            {!playing ? <i className="fa-solid fa-play fa-2xl play-icon"></i> : <i className="fa-solid fa-pause fa-2xl play-icon"></i>}
          </div>
        </div> */}
      {songs?.map((song, count) => {
        return (
          <div className="song-list-row" key={songs.id}>
            <SongList key={songs.id}
              song={song}
              count={count + 1} />
          </div>
        )
      })}
      <SongDropdown song={songs} />
    </section >

  )
}

export default ManageSongs;
