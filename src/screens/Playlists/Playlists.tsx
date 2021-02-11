import React, { useState } from 'react';
import { useTheme } from '@emotion/react';

import { Input } from '../../components';
import { PlaylistsLayout } from './PlaylistsLayout';
import { PlaylistsList } from './PlaylistsList';

export const Playlists: React.FC = () => {
  const [query, setQuery] = useState('');
  const theme = useTheme();

  return (
    <PlaylistsLayout>
      <Input
        placeholderTextColor={theme.colors.main}
        placeholder="Найдите любимый жанр"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      <PlaylistsList query={query} />
    </PlaylistsLayout>
  );
};
