import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

function Quotes({ newQuote }) {
  const [quote, updateQuote] = useState('');
  const [hasError, updateHasError] = useState(false);
  const [isLoading, updateIsLoading] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';
      updateIsLoading(true);
      try {
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': 'IREFUfHQnKWrUx2fJG8dcg==6qIFM3RRE05NaVte',
          },
        });
        if (response.ok) {
          const [data] = await response.json();
          updateQuote(data);
        } else {
          updateHasError(response.status);
        }
      } catch (error) {
        updateHasError(error.message);
      }
      updateIsLoading(false);
    };

    doFetch();
  }, [newQuote]);

  if (isLoading) {
    return (
      <p>Fact is loading...</p>
    );
  }
  if (hasError) {
    return (
      <p>
        There is something wrong.
        <br />
        Error:
        {' '}
        {hasError}
      </p>
    );
  }

  return (
    <p>
      The Fact of the day:
      <br />
      <br />
      {quote.quote}
      <br />
      <br />
      -Author:
      {' '}
      {quote.author}
    </p>
  );
}

Quotes.propTypes = { newQuote: PropTypes.bool.isRequired };

export default Quotes;
