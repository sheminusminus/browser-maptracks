import qs from 'query-string';
const SweetieKit = Require('std:sweetiekit.node');

import * as Fetch from './fetch';

const { NSURL, NSURLRequest } = SweetieKit;

let accessToken;
let username;

const scopes = [
  'user-read-recently-played',
  'user-top-read',
  'user-library-read',
  'playlist-read-private',
  'user-read-private',
  'user-read-playback-state',
  'user-read-currently-playing',
];

const urlScope = encodeURIComponent(scopes.join(' '));

const authUrl = 'https://accounts.spotify.com/authorize';
const redirectUrl = 'https://maptracks.me/spotify';
const clientId = 'a568fd7163b44e5881e1d4ebcaeacd85';

export const buildAuthRequest = () => {
  const urlString = `${authUrl}?response_type=code&client_id=${clientId}&scope=${urlScope}&redirect_uri=${redirectUrl}&show_dialog=true`;
  const url = NSURL(urlString);
  return NSURLRequest.requestWithURL(url);
};

export const getCodeFromUrl = (fullUrl) => {
  const url = new URL(fullUrl);
  const search = url.search;
  const parts = search.split('?code=');
  if (parts.length > 1) {
    return parts[1];
  }
  return undefined;
};
