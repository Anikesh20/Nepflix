import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../context/firebase';
import { Header, Loading } from '../../components';
import * as ROUTES from '../../constants/routes';
import logo from '../../logo.svg';

export function PlayerContainer({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return (
    <Header bg={false} dontShowOnSmallViewPort>
      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Nepflix" />
          <Header.TextLink active={false} onClick={() => {}}>
            Series
          </Header.TextLink>
          <Header.TextLink active={false} onClick={() => {}}>
            Films
          </Header.TextLink>
        </Header.Group>
        <Header.Group>
          <Header.Profile>
            <Header.Picture src={user.photoURL} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Picture src={user.photoURL} />
                <Header.TextLink>{user.displayName}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink onClick={() => firebase.auth().signOut()}>
                  Sign out
                </Header.TextLink>
              </Header.Group>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>
      <Header.Feature>
        <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
        <Header.Text>
          Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
          City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
          futile attempt to feel like he's part of the world around him.
        </Header.Text>
        <Header.PlayButton onClick={() => setShowPlayer(!showPlayer)}>Play</Header.PlayButton>
      </Header.Feature>
      {showPlayer && (
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
            City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
            futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton onClick={() => setShowPlayer(!showPlayer)}>Play</Header.PlayButton>
        </Header.Feature>
      )}
    </Header>
  );
}

const Player = ({ children, ...restProps }) => {
  return (
    <PlayerContainer {...restProps}>
      <Player.Video>
        <video id="nepflix-player" controls>
          {children}
        </video>
      </Player.Video>
    </PlayerContainer>
  );
};

Player.Video = function PlayerVideo({ src, ...restProps }) {
  return (
    <video id="nepflix-player" controls {...restProps}>
      <source src={src} type="video/mp4" />
    </video>
  );
};

Player.Button = function PlayerButton({ ...restProps }) {
  return (
    <button {...restProps}>
      Play
    </button>
  );
};

export default Player;
