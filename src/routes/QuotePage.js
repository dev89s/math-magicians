import { useState } from 'react';

import Quotes from '../components/Quotes';
import Refresh from '../components/QuoteRefresh';

function QuotePage() {
  const [newQuote, setNewQuote] = useState(false);

  return (
    <div className="quote">
      <Quotes newQuote={newQuote} />
      <Refresh setNewQuote={setNewQuote} newQuote={newQuote} />
    </div>
  );
}

export default QuotePage;
