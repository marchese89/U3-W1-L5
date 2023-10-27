import { Component } from "react";
import FilmRow from "./FilmRow";
import { Alert } from "react-bootstrap";

class Main extends Component {
  state = {
    error: false,
    errorMessage: "Errore",
  };
  render() {
    return (
      <main className="mx5">
        {this.state.error && (
          <Alert variant="danger" className="text-center">
            {this.state.errorMessage}
          </Alert>
        )}
        <h3 className="text-white mt-3 mb-3 mt-5">Harry Potter</h3>
        <FilmRow query="Harry Potter" handleError={this} />
        <h3 className="text-white mt-3 mb-3">Ritorno al futuro</h3>
        <FilmRow query="back to the future" handleError={this} />
        <h3 className="text-white mt-3 mb-3">Il signore degli Anelli</h3>
        <FilmRow query="the lord of the rings" handleError={this} />
      </main>
    );
  }
}

export default Main;
