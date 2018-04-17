import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Image1 from '../images/grid-list/a_park.jpg';
import Image2 from '../images/grid-list/b_park.jpg';
import Image3 from '../images/grid-list/c_park.jpg';
import Image4 from '../images/grid-list/d_park.jpg';
import Image5 from '../images/grid-list/i_park.jpg';
import Image6 from '../images/grid-list/f_park.jpg';
import Image7 from '../images/grid-list/g_park.jpg';
import Image8 from '../images/grid-list/h_park.jpg';

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
    img: Image1,
    place: 'aaaa',
    id: 'AAAA',
  },
  {
    img: Image2,
    place: 'bbbb',
    id: 'BBBB',
  },
  {
    img: Image3,
    place: 'cccc',
    id: 'CCCC',
  },
  {
    img: Image4,
    place: 'dddd',
    id: 'DDDD',
  },
  {
    img: Image5,
    place: 'eeee',
    id: 'EEEE',
  },
  {
    img: Image6,
    place: 'ffff',
    id: 'FFFF',
  },
  {
    img: Image7,
    place: 'gggg',
    id: 'GGGG',
  },
  {
    img: Image8,
    place: 'hhhh',
    id: 'HHHHH',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const SliderComponent = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.place}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          actionPosition="right"
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />

        </GridTile>
      ))}
    </GridList>
  </div>
);

export default SliderComponent;
