import React from 'react';

import RegularHeader from '../components/RegularHeader/RegularHeader';
import PageCanvas from '../components/PageCanvas/PageCanvas';
import SearchField from '../components/SearchField/SearchField';
import FoundPlanet from '../components/FoundPlanet/FoundPlanet';

class Search extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      found: [],
      name: ""
    };
  } 

  componentDidMount() {
    if(this.props.value && this.props.exoplanets.length > 0) {
      console.log(this.props.value);
      console.log(this.props.exoplanets.length);
      this.handleSearch(this.props.value);
    }
  }

  findStarOndPlanet(name) {
    const { exoplanets } = this.props;

    this.setState({ name });

    const planet = exoplanets.find(p => p.pl_name === name);

    if(planet) {
      return { type: "planet", content: planet }
    }

    const planets = exoplanets.filter(s => s.pl_hostname === name)

    if(planets.length > 0) {
      return { type: "star", content: planets }
    }

    return null;
  }

  handleSearch = value => {
    const lel = this.findStarOndPlanet(value);
    console.log(lel);
    this.setState({ found: this.findStarOndPlanet(value) });
  }

  render() {
    let foundRender = <div style={{marginTop: 10}}>Wpisz nazwę obiektu i kliknij przycisk, bo go wyszukać.</div>;
    if(!this.state.found) {
      foundRender = <div style={{color: 'red', marginTop: 10}}>Nie udało się nic znaleźć...</div>;
    } else if(this.state.found.type) {
      foundRender = <FoundPlanet name={this.state.name} data={this.state.found.content} type={this.state.found.type} />;
    }

    return (
      <>
        <RegularHeader />
        <PageCanvas>
          <SearchField value={this.props.value} searchCallback={this.handleSearch} />
          {foundRender}
          <div style={{color: "#ffffff50"}}>Ta sekcja strony będzie szczególnie rozwijana w przyszłości.</div>
        </PageCanvas>
      </>
    );
  }
}

export default Search;