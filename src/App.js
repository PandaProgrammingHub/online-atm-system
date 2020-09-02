import React, { Component } from 'react';
import { withRouter } from 'react-router';
import SinglePage from './components/SinglePage';
import { animateScroll as scroll } from 'react-scroll';
import './styles.css';

class ScrollToTop extends Component {
  componentDidUpdate() {
    scroll.scrollToTop({ duration: 300 });
  }

  render() {
    return this.props.children;
  }
}
export const scrollToTopWithRouter = withRouter(ScrollToTop);

const App = (props) => {
  return (
    <ScrollToTop>
      <SinglePage />
    </ScrollToTop>
  );
};

export default App;
