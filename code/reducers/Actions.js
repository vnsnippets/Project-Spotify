/**
 * Author: Vidush H. Namah (2020)
 * Action keys for all operations
*/

// Asynchronous operations
export const FEATURED = {
    TRIGGER_FETCH : "FEATURED_TRIGGER_FETCH",
    SAGA_FETCH_START : "FEATURED_SAGA_FETCH_START",
    SAGA_FETCH_SUCCESS : "FEATURED_SAGA_FETCH_SUCCESS",
    SAGA_FETCH_FAILURE : "FEATURED_SAGA_FETCH_FAILURE",
};

export const PLAYLIST = {
    TRIGGER_FETCH : "PLAYLIST_TRIGGER_FETCH",
    SAGA_FETCH_START : "PLAYLIST_SAGA_FETCH_START",
    SAGA_FETCH_SUCCESS : "PLAYLIST_SAGA_FETCH_SUCCESS",
    SAGA_FETCH_FAILURE : "PLAYLIST_SAGA_FETCH_FAILURE",

    CLEAR_SELECTION : "PLAYLIST_CLEAR_SELECTION",
    TRIGGER_AUDIO : "PLAYLIST_TRIGGER_AUDIO"
};

export const PLAYER = {
    SAGA_LAUNCH_AUDIO : "PLAYER_SAGA_LAUNCH_AUDIO",
    SAGA_PAUSE_AUDIO : "PLAYER_SAGA_PAUSE_AUDIO"
}