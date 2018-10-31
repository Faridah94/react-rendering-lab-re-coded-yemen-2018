import React from 'react';
import Rating from './Survey';

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

class Survey extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rating: 0
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.Survey < nextProps.Survey) {
      this.setState({
        increasing: true,
      });
    } else if (this.props.Survey > nextProps.Survey) {
      this.setState({
        decreasing: true
      });
    } else {
      this.setState({
        increasing: false,
        decreasing: false
      })
    }
  }

  increaseRating = () => {
    this.setState({ rating: this.state.Survey + 1 });
  }

  decreaseRating = () => {
    this.setState({ rating: this.state.Survey - 1 });
  }

  maintainRating = () => this.forceUpdate();

  render() {
    return (
      <div>
        <Rating rating={this.state.Survey} />
        <button onClick={this.increaseRating}>Loved it!</button>
        <button onClick={this.maintainRating}>Indifferent!</button>
        <button onClick={this.decreaseRating}>Hated it!</button>
      </div>
    )
  }
}

export default Survey;
