import React from "react";
import axios from "axios";
import {
  AddContainer,
  ContainerItems,
  MainContainer,
  Text,
} from "./styles/StyledAddTracks";

const urlApi =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "otacilia-souza-gebru",
  },
};

export default class AddTracks extends React.Component {
  state = {
    name: "",
    artist: "",
    urlTrack: "",
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeArtist = (event) => {
    this.setState({ artist: event.target.value });
  };
  onChangeURL = (event) => {
    this.setState({ urlTrack: event.target.value });
  };

  addTrackToPlaylist = async (id) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.urlTrack,
    };
    try {
      const res = await axios.post(
        `${urlApi}/${this.props.playlistId}/tracks`,
        body,
        headers
      );

      alert("Musica adicionada.");
      this.setState({ name: "", artist: "", urlTrack: "" });
      this.props.getPlaylistTracks(this.props.playlistId);
    } catch (err) {
      alert(err.response.message);
    }
  };

  render() {
    return (
      <AddContainer>
        <button onClick={this.props.closeAddPage}>X</button>
        <ContainerItems>
          <MainContainer>
            <input
              placeholder={"Informe o nome da música desejada!"}
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <input
              placeholder={"Informe o nome do artista da música!"}
              value={this.state.artist}
              onChange={this.onChangeArtist}
            />
            <input
              placeholder={"Informe a url da música desejada!"}
              value={this.state.urlTrack}
              onChange={this.onChangeURL}
            />
            <button onClick={() => this.addTrackToPlaylist()}>Adicionar</button>
          </MainContainer>
         
        </ContainerItems>
      </AddContainer>
    );
  }
}
