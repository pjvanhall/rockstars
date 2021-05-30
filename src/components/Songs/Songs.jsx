import React from 'react'
import { useQuery } from 'react-query'
import ListItem from '@material-ui/core/ListItem'
import { useParams } from 'react-router-dom'
import { AutoSizerList } from '../common/AutoSizerList/AutoSizerList'

const fetchSongs = ({ queryKey }) => {
  console.log('fetchSongs', queryKey)
  const artist = queryKey[1]
  return fetch(`http://localhost:3000/songs?artist=${encodeURIComponent(artist)}`).then((res) => res.json())
}

export const Songs = () => {
  const { artist } = useParams()

  const songs = useQuery(['songs', artist], fetchSongs)

  const rowRenderer = ({ key, index, style }) => (
    <ListItem key={key} style={style}>
      {songs.data[index].name}
    </ListItem>
  )

  const rowHeight = 50

  if (songs.data) {
    return (
      <AutoSizerList rowHeight={rowHeight} rowRenderer={rowRenderer} rowCount={songs.data.length} />
    )
  }

  return null
}
