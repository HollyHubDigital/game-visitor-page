'use client';

import { useEffect, useState } from 'react';

type DownloadResponse = {
  ok: boolean;
  downloadUrl?: string;
};

export function DownloadLink({
  label,
  style
}: {
  label: string;
  style?: React.CSSProperties;
}) {
  const [downloadUrl, setDownloadUrl] = useState('');
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let active = true;

    async function loadDownloadUrl() {
      try {
        const response = await fetch('/api/download');
        const data = (await response.json()) as DownloadResponse;
        const url = data.downloadUrl ? new URL(data.downloadUrl) : null;
        if (!response.ok || !data.ok || !url || url.protocol !== 'https:') {
          throw new Error('The game download is not available.');
        }
        if (active) setDownloadUrl(url.toString());
      } catch {
        if (active) setUnavailable(true);
      }
    }

    void loadDownloadUrl();
    return () => {
      active = false;
    };
  }, []);

  if (downloadUrl) {
    return (
      <a href={downloadUrl} target="_blank" rel="noreferrer" style={style}>
        {label}
      </a>
    );
  }

  return (
    <span
      aria-disabled="true"
      title={unavailable ? 'The game download is not available right now.' : 'Loading game download'}
      style={{ ...style, opacity: 0.65, cursor: 'not-allowed' }}
    >
      {unavailable ? 'Download unavailable' : 'Loading download...'}
    </span>
  );
}
