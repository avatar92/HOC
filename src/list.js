import React, {Component} from 'react'
import MovieCard from './item'
import LoaderHoc from './hoc'
class MovieList extends Component {    
      render() {
        return(
            this.props.movielist.map((el)=><MovieCard key={el.id} currentmovie={el}/>)           
        )
      }
}
 
export default LoaderHoc(MovieList);