const SweetieKit = Require('std:sweetiekit.node');

const { NSUserDefaults } = SweetieKit;


const defaults = NSUserDefaults.standardUserDefaults;
const kUser = 'USER_KEY';
const kUid = 'UID_KEY';
const kRefreshToken = 'REFRESH_TOKEN_KEY';
const kSpotifyData = 'SPOTIFY_DATA_KEY';

export const setUser = (user) => {
  const userData = JSON.stringify(user);
  defaults.setObjectForKey(userData, kUser);
  defaults.setObjectForKey(user.uid, kUid);
  defaults.setObjectForKey(user.refreshToken, kRefreshToken);
};

export const deleteUser = () => {
  defaults.removeObjectForKey(kUser);
  defaults.removeObjectForKey(kUid);
  defaults.removeObjectForKey(kRefreshToken);
};

export const getUser = () => {
  const userData = defaults.objectForKey(kUser);
  return userData ? JSON.parse(userData) : undefined;
};

export const getUid = () => {
  const uid = defaults.stringForKey(kUid);
  return uid ? JSON.parse(uid) : undefined;
};

export const getRefreshToken = () => {
  const token = defaults.stringForKey(kRefreshToken);
  return token ? JSON.parse(token) : undefined;
};

export const setSpotifyData = (data) => {
  const spotifyData = JSON.stringify(data);
 defaults.setObjectForKey(spotifyData, kSpotifyData);
};

export const getSpotifyData = () => {
  const data = defaults.objectForKey(kSpotifyData);
  return data ? JSON.parse(data) : undefined;
};
