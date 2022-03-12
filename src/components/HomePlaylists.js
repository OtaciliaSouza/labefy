import React from "react";
import {
  FirstContainer,
  FirstTitle,
  FirstContainerItems,
  SecondContainer,
  SecondTitle,
  SecondContainerItems,
} from "./styles/StyledHomePlaylists";

export default class HomePlaylists extends React.Component {
  render() {
    return (
      <div>
        <FirstContainer>
          <FirstTitle>Bem Vindo(a)</FirstTitle><br></br>
          <br></br><h1>Suas Músicas</h1>
          <FirstContainerItems
          src="https://open.spotify.com/embed/artist/5b1LZydvim4pWN3DAhyygV?utm_source=generator" 
           allowfullscreen="" 
           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <FirstContainerItems
           src="https://open.spotify.com/embed/album/693L7fhlTRhPqgnnoYb8BA?utm_source=generator" 
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
             />
          <FirstContainerItems
          src="https://open.spotify.com/embed/playlist/37i9dQZF1E4yc0WUjQZtad?utm_source=generator"
          allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
         />
        <FirstContainerItems
         src="https://open.spotify.com/embed/album/3mAzRo03Jk2g3Vq1q382tm?utm_source=generator"
         allowfullscreen="" 
         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
         />
       <FirstContainerItems
        src="https://open.spotify.com/embed/album/3g81xfQ3XeiFEKxcbxXVMx?utm_source=generator"
        allowfullscreen="" 
       allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
       />

      <FirstContainerItems
      src="https://open.spotify.com/embed/album/4afZU0Lnw5XW8gP9o3q1PW?utm_source=generator"
      allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
      <FirstContainerItems
      src="https://open.spotify.com/embed/album/60zdKaNDD0nMnM90ndtcGF?utm_source=generator" 
      allowfullscreen="" 
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
       <FirstContainerItems
     src="https://open.spotify.com/embed/artist/27T030eWyCQRmDyuvr1kxY?utm_source=generator" 
     allowfullscreen="" 
     allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
     />

    <FirstContainerItems
    src="https://open.spotify.com/embed/album/3SrW9PsWq7ipPERLgck3tA?utm_source=generator" 
    allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    />

        </FirstContainer>
        <SecondContainer>
          <SecondTitle>Seus Programas</SecondTitle>
          <SecondContainerItems
            src="https://open.spotify.com/embed/show/2w3vpindCOfxVx2oHlbjHm?utm_source=generator" 
             allowfullscreen="" 
             allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
             />
                <SecondContainerItems
               src="https://open.spotify.com/embed/show/7vvhCa1egAohzQ5VmbPBVF?utm_source=generator"
                allowfullscreen=""
                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />

            <SecondContainerItems
            src="https://open.spotify.com/embed/show/2w3IfCyn2cAVrSrzVkwTcj?utm_source=generator"
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />

          
        </SecondContainer>
      </div>
    );
  }
}
