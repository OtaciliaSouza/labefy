import React from "react";
import Home from "./images/home.png";
import Search from "./images/search.png";
import Library from "./images/biblioteca.png";
import {
  SideBarContainer,
  FirstContainer,
  FirstContainerItem,
  SecondContainer,
  SecondContainerItem,
  AddStyle,
  HeartStyle,
  PlaylistsTitle,
  PlaylistsContainer,
  ContainerItems,
} from "./styles/StyledSidebar";

export default class Sidebar extends React.Component {
  componentDidMount() {
    this.props.getAllPlaylists();
  }

  render() {
    const playlists = this.props.playlists.map((list) => {
      return (
        <div>
          <div onClick={() => this.props.getPlaylistTracks(list.id, list.name)}>
            <div onClick={() => this.props.pageDetails()}>
              <PlaylistsTitle>{list.name}</PlaylistsTitle>
            </div>
          </div>
        </div>
      );
    });

    return (
      <SideBarContainer>
        <ContainerItems>
          <div>
            <h1 onClick={() => this.props.pageHome()}>Labefy</h1>
          </div>
          <FirstContainer>
            <FirstContainerItem onClick={() => this.props.pageHome()}>
              <img src={Home} alt="Ícone home" />
              <h4>Início</h4>
            </FirstContainerItem>
            <FirstContainerItem>
              <img src={Search} alt="Ícone home" />
              <h4>Buscar</h4>
            </FirstContainerItem>
            <FirstContainerItem onClick={() => this.props.pagePlaylists()}>
              <img src={Library} alt="Ícone home" />
              <h4>Sua Biblioteca</h4>
            </FirstContainerItem>
          </FirstContainer>
          <SecondContainer>
            <SecondContainerItem onClick={() => this.props.pageCreate()}>
              <AddStyle>+</AddStyle>
              <h4>Criar playlist</h4>
            </SecondContainerItem>
            <SecondContainerItem>
              <HeartStyle>❤</HeartStyle>
              <h4>Músicas Curtidas</h4>
            </SecondContainerItem>
          </SecondContainer>
          <hr />
          <PlaylistsContainer>{playlists}</PlaylistsContainer>
        </ContainerItems>
      </SideBarContainer>
    );
  }
}
