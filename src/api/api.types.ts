import {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

export declare namespace Components {
  namespace Schemas {
    export interface PlaylistDto {
      id: string;
      name: string;
      cover: string;
    }
    export interface TrackDto {
      id: string;
      name: string;
      artist: string;
      album: string;
      mp3: string;
    }
  }
}
declare namespace Paths {
  namespace PlaylistsControllerFindTracksByPlaylistId {
    namespace Parameters {
      export type PlaylistId = string;
    }
    export interface QueryParameters {
      playlistId: Parameters.PlaylistId;
    }
    namespace Responses {
      export type $200 = Components.Schemas.TrackDto[];
    }
  }
  namespace PlaylistsControllerGetCherryPickPlaylists {
    namespace Responses {
      export type $200 = Components.Schemas.PlaylistDto[];
    }
  }
  namespace PlaylistsControllerGetPlaylist {
    namespace Parameters {
      export type Id = string;
    }
    export interface PathParameters {
      id: Parameters.Id;
    }
    namespace Responses {
      export type $200 = Components.Schemas.PlaylistDto;
    }
  }
  namespace PlaylistsControllerGetPlaylists {
    namespace Parameters {
      export type Query = string;
    }
    export interface QueryParameters {
      query: Parameters.Query;
    }
    namespace Responses {
      export type $200 = Components.Schemas.PlaylistDto[];
    }
  }
  namespace PlaylistsControllerGetPlaylistsByArtist {
    namespace Parameters {
      export type Query = string;
    }
    export interface QueryParameters {
      query: Parameters.Query;
    }
    namespace Responses {
      export type $200 = {}[];
    }
  }
  namespace ShareControllerShare {
    namespace Parameters {
      export type Guess = number;
      export type PlaylistId = string;
    }
    export interface QueryParameters {
      playlistId: Parameters.PlaylistId;
      guess: Parameters.Guess;
    }
    namespace Responses {
      export type $200 = string;
    }
  }
}

export interface OperationMethods {
  /**
   * PlaylistsController_getPlaylists
   */
  'PlaylistsController_getPlaylists'(
    parameters?: Parameters<Paths.PlaylistsControllerGetPlaylists.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PlaylistsControllerGetPlaylists.Responses.$200>;
  /**
   * PlaylistsController_getCherryPickPlaylists
   */
  'PlaylistsController_getCherryPickPlaylists'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PlaylistsControllerGetCherryPickPlaylists.Responses.$200>;
  /**
   * PlaylistsController_getPlaylistsByArtist
   */
  'PlaylistsController_getPlaylistsByArtist'(
    parameters?: Parameters<Paths.PlaylistsControllerGetPlaylistsByArtist.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PlaylistsControllerGetPlaylistsByArtist.Responses.$200>;
  /**
   * PlaylistsController_getPlaylist
   */
  'PlaylistsController_getPlaylist'(
    parameters?: Parameters<Paths.PlaylistsControllerGetPlaylist.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PlaylistsControllerGetPlaylist.Responses.$200>;
  /**
   * PlaylistsController_findTracksByPlaylistId
   */
  'PlaylistsController_findTracksByPlaylistId'(
    parameters?: Parameters<Paths.PlaylistsControllerFindTracksByPlaylistId.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.PlaylistsControllerFindTracksByPlaylistId.Responses.$200>;
  /**
   * ShareController_share
   */
  'ShareController_share'(
    parameters?: Parameters<Paths.ShareControllerShare.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig,
  ): OperationResponse<Paths.ShareControllerShare.Responses.$200>;
}

export interface PathsDictionary {
  ['/playlists']: {
    /**
     * PlaylistsController_getPlaylists
     */
    'get'(
      parameters?: Parameters<Paths.PlaylistsControllerGetPlaylists.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PlaylistsControllerGetPlaylists.Responses.$200>;
  };
  ['/playlists/cherry-pick']: {
    /**
     * PlaylistsController_getCherryPickPlaylists
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PlaylistsControllerGetCherryPickPlaylists.Responses.$200>;
  };
  ['/playlists/artist']: {
    /**
     * PlaylistsController_getPlaylistsByArtist
     */
    'get'(
      parameters?: Parameters<Paths.PlaylistsControllerGetPlaylistsByArtist.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PlaylistsControllerGetPlaylistsByArtist.Responses.$200>;
  };
  ['/playlists/{id}']: {
    /**
     * PlaylistsController_getPlaylist
     */
    'get'(
      parameters?: Parameters<Paths.PlaylistsControllerGetPlaylist.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PlaylistsControllerGetPlaylist.Responses.$200>;
  };
  ['/playlists/{id}/tracks']: {
    /**
     * PlaylistsController_findTracksByPlaylistId
     */
    'get'(
      parameters?: Parameters<Paths.PlaylistsControllerFindTracksByPlaylistId.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.PlaylistsControllerFindTracksByPlaylistId.Responses.$200>;
  };
  ['/share']: {
    /**
     * ShareController_share
     */
    'get'(
      parameters?: Parameters<Paths.ShareControllerShare.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig,
    ): OperationResponse<Paths.ShareControllerShare.Responses.$200>;
  };
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;
