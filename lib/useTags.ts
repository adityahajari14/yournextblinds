import { useEffect, useState } from 'react';
import { fetchTagsByType, TagData } from './api';

export function useTagsByType(type?: 'COLORS' | 'NO_DRILL_BLINDS' | 'WINDOW_TYPE' | 'SOLUTION' | 'ROOM') {
  const [tags, setTags] = useState<TagData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadTags = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchTagsByType(type);
        setTags(response.data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load tags'));
        setTags([]);
      } finally {
        setLoading(false);
      }
    };

    loadTags();
  }, [type]);

  return { tags, loading, error };
}

