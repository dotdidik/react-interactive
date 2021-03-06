import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Media } from 'reactstrap';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('https://reduxblog.herokuapp.com/api/posts?key=interactive')
    .then(r => {
      this.setState({ posts: r.data });
      console.log('response', r.data)
    })
  }

  render() {
    return (
      <div>
        <Media>
          <Media left href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Media heading
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>
    );
  }
}

export default App;
