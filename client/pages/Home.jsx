import React, { Component } from 'react';
import TopCategoriesContainer from '../containers/TopCategoriesContainer.jsx';
import SearchContainer from '../containers/SearchContainer.jsx';
import ResultsContainer from '../containers/ResultsContainer.jsx';

const Home =(props) => {
    const { results, preferredLocations, closedLocations } = props.state;
    const { searchButtonHandler, catBtnHandler } = props;

    return(
      <div>
        <TopCategoriesContainer catBtnHandler={catBtnHandler} />
        <SearchContainer searchButtonHandler={searchButtonHandler} />
        <ResultsContainer 
          results={results}
          preferredLocations={preferredLocations}
          closedLocations={closedLocations}
        />
      </div>
  )
}


export default Home;






/* original Home Class Component
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //cateWasChosen: true,
    };
  }

  render() {
    const { searchButtonHandler } = this.props;

    return (
      <div>
        <TopCategoriesContainer state={this.props} />
        <SearchContainer searchButtonHandler={searchButtonHandler} ></SearchContainer>
      </div>
    );
  }
}

export default Home;

/*
if we're using this, we need to go back to App.jsx and pass down searchButtonHandler as a property in the Route Switch
<SearchContainer searchButtonHandler={searchButtonHandler} ></SearchContainer>

*/
