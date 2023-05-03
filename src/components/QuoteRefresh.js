import { PropTypes } from 'prop-types';

function QuoteRefresh({ setNewQuote, newQuote }) {
  const handleRefresh = () => {
    setNewQuote(!newQuote);
  };

  return (
    <button type="button" className="quote-refresh" onClick={handleRefresh}>Refresh</button>
  );
}

QuoteRefresh.propTypes = {
  setNewQuote: PropTypes.func.isRequired,
  newQuote: PropTypes.bool.isRequired,
};

export default QuoteRefresh;
