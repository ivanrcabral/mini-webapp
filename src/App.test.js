import React from "react";
import { shallow } from "enzyme";

import Header from "./App/Components/Header/header";
import Home from "./App/Components/Home/home";
import Movies from "./App/Components/Home/movies";
import Movie from "./App/Components/Movie/movie";
import MovieDetail from "./App/Components/Movie/movieDetail";


describe("<Header />", () => {

  const component = shallow(<Header />);

  it("should render a <Header /> component", () => {
      expect(component).toBeDefined();
  }); 

});

describe("<Home />", () => {

    const component = shallow(<Home />);

    it("should render a <Home /> component", () => {
        expect(component).toBeDefined();
    }); 

});

describe("<Movies />", () => {

  const component = shallow(<Movies />);

  it("should render a <Movies /> component", () => {
      expect(component).toBeDefined();
  }); 

});

describe("<Movie />", () => {

  const component = shallow(<Movie />);

  it("should render a <Movie /> component", () => {
      expect(component).toBeDefined();
  }); 

});

describe("<MovieDetail />", () => {

  const component = shallow(<MovieDetail />);

  it("should render a <MovieDetail /> component", () => {
      expect(component).toBeDefined();
  }); 

});