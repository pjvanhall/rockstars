import React from 'react'
import { useQuery } from 'react-query'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link } from 'react-router-dom'
import { AutoSizerList } from '../common/AutoSizerList/AutoSizerList'

const fetchArtists = () => fetch('http://localhost:3000/artists').then((res) => res.json())

export const Artists = () => {
  const artists = useQuery('artists', fetchArtists)

  const rowRenderer = ({ key, index, style }) => (
    <ListItem key={key} component={Link} to={`/songs/${encodeURIComponent(artists.data[index].name)}`} style={style} >
      <ListItemText primary={artists.data[index].name}/>
    </ListItem>
  )

  const rowHeight = 50

  if (artists.data) {
    return (
      <AutoSizerList rowHeight={rowHeight} rowRenderer={rowRenderer} rowCount={artists.data.length} />
    )
  }

  return null
}
