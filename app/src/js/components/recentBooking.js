import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Image1 from '../../images/Grid_list/a_park.jpeg';
import Image2 from '../../images/Grid_list/b_park.jpeg';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'Image1',
    place: 'aaaa',
    id: 'AAAA',
  },
  {
    img: '/images/Grid-list/b_park.jpeg',
    place: 'bbbb',
    id: 'BBBB',
  },
  {
    img: '/images/Grid-list/c_park.jpeg',
    place: 'cccc',
    id: 'CCCC',
  },
  {
    img: '/images/Grid-list/d_park.jpeg',
    place: 'dddd',
    id: 'DDDD',
  },
  {
    img: '/images/Grid-list/e_park.jpeg',
    place: 'eeee',
    id: 'EEEE',
  },
  {
    img: '/images/Grid-list/f_park.jpeg',
    place: 'ffff',
    id: 'FFFF',
  },
  {
    img: '/images/Grid-list/g_park.jpeg',
    place: 'gggg',
    id: 'GGGG',
  },
  {
    img: '/images/Grid-list/h_park.jpeg',
    place: 'hhhh',
    id: 'HHHHH',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.place}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;
