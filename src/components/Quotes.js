import { useState, useEffect } from 'react';

function Quotes() {
  const [quote, updateQuote] = useState('');
  const [hasError, updateHasError] = useState(false);
  const [isLoading, updateIsLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      const url = 'https://api.api-ninjas.com/v1/facts?limit=1';
      updateIsLoading(true);
      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': 'IREFUfHQnKWrUx2fJG8dcg==6qIFM3RRE05NaVte',
          },
        });
        if (response.ok) {
          const [data] = await response.json();
          updateQuote(data.fact);
        } else {
          updateHasError(response.status);
        }
      } catch (error) {
        updateHasError(error.message);
      }
      updateIsLoading(false);
    };

    doFetch();
  }, []);

  if (isLoading) {
    return (
      <div className="quote">Fact is loading...</div>
    );
  }
  if (hasError) {
    return (
      <div className="quote">
        There is something wrong.
        <br />
        Error:
        {' '}
        {hasError}
      </div>
    );
  }

  return (
    <div className="quote">
      The Fact of the day:
      <br />
      {quote}
    </div>
  );
}

export default Quotes;
