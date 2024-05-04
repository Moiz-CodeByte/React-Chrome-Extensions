import React, { useEffect, useState } from 'react';
//@ts-ignore

const Popup = () => {
  const [urls, setUrls] = useState<Record<string, number>>({});
  const [newUrl, setNewUrl] = useState('');

  useEffect(() => {
    chrome.storage.local.get('urls', ({ urls }) => setUrls(urls || {}));
  }, []);

  const addUrl = () => {
    chrome.storage.local.get('urls', ({ urls = {} }) => {
      urls[newUrl] = 0;
      chrome.storage.local.set({ urls }, () => {
        setUrls(urls);
        setNewUrl('');
      });
    });
  };

  return (
    <div>
      <h1>URL Counter</h1>
      <input type="text" value={newUrl} onChange={(e) => setNewUrl(e.target.value)} />
      <button onClick={addUrl}>Add URL</button>
      <ul>
        {Object.entries(urls).map(([url, count]) => (
          <li key={url}>
            {url}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popup;

