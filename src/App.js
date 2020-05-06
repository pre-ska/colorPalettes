import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import "./App.css";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  constructor() {
    super();
    const savedPalettes = JSON.parse(localStorage.getItem("palettes"));
    this.state = {
      palettes: savedPalettes || seedColors
    };
  }

  findPalette = id => {
    return this.state.palettes.find(function(palette) {
      return palette.id === id;
    });
  };

  savePalette = newPalette => {
    this.setState(
      {
        palettes: [newPalette, ...this.state.palettes]
      },
      this.syncLocalStorage
    );
  };

  syncLocalStorage = () => {
    localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  };

  deletePalette = id => {
    console.log(id);
    this.setState(
      st => ({
        palettes: st.palettes.filter(p => p.id !== id)
      }),
      this.syncLocalStorage
    );
  };

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/palette/new"
                  render={routeProps => (
                    <div className="page">
                      <NewPaletteForm
                        {...routeProps}
                        palettes={this.state.palettes}
                        savePalette={this.savePalette}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:paletteId/:colorId"
                  render={routeProps => (
                    <div className="page">
                      <SingleColorPalette
                        colorId={routeProps.match.params.colorId}
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.paletteId)
                        )}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/"
                  render={routeProps => (
                    <div className="page">
                      <PaletteList
                        deletePalette={this.deletePalette}
                        {...routeProps}
                        palettes={this.state.palettes}
                      />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                    <div className="page">
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )}
                      />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default App;
