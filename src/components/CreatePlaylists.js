import React from "react";
import axios from "axios";
import { MainContainer, Text } from "./styles/StyledCreatePlaylist";

const urlApi =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "otacilia-souza-gebru",
  },
};

export default class CreatePlaylists extends React.Component {
  state = {
    playlist: "",
  };

  onChangePlaylistName = (event) => {
    this.setState({ playlist: event.target.value });
  };

  createPlaylist = async () => {
    const body = { name: this.state.playlist };
    try {
      const res = await axios.post(urlApi, body, headers);

      alert("Playlist criada");
      this.setState({ playlist: "" });
      this.props.getAllPlaylists();
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    return (
      <div>
        <MainContainer>
          <h2>Crie sua nova playlist</h2>
          <input
            placeholder={"Minha playlist"}
            value={this.state.playlist}
            onChange={this.onChangePlaylistName}
          />
          <button onClick={this.createPlaylist}>Criar Playlist</button>
          <button onClick={() => this.props.pagePlaylists()}>
            Acessar Playlists
          </button>
        </MainContainer>
        {/* Obs1: acesse a biblioteca e em seguida clique na palylist a qual deseja adicionar 
        mais uma musica */}
       
      </div>
    );
  }
}
