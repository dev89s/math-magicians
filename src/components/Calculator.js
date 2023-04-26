import { PropTypes } from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculator';

function Calculator() {
  const initState = {
    total: null,
    next: null,
    operation: null,
  };
  const [calcState, updateCalcState] = useState(initState);
  const onClick = (buttonText) => {
    // console.log(buttonText);
    updateCalcState(calculate(calcState, buttonText));
  };

  return (
    <div className="calculator">
      <Display total={calcState.total} input={calcState.next} />
      <Keypad onClick={onClick} />
    </div>
  );
}

function Display(props) {
  const { total, input } = props;
  console.log('total:', total, 'next:', input);
  let disNum;
  if (input) {
    disNum = input;
  } else {
    disNum = total;
  }
  return (
    <span className="calc-display">
      {disNum}
    </span>
  );
}

Display.defaultProps = { total: '0', input: '0' };

Display.propTypes = { total: PropTypes.string, input: PropTypes.string };

function Keypad(props) {
  const { onClick } = props;
  return (
    <div className="keypad">
      <GreyButton buttonText="AC" onClick={onClick} />
      <GreyButton buttonText="+/-" onClick={onClick} />
      <GreyButton buttonText="%" onClick={onClick} />
      <OrangeButton buttonText="÷" onClick={onClick} />
      <GreyButton buttonText="7" onClick={onClick} />
      <GreyButton buttonText="8" onClick={onClick} />
      <GreyButton buttonText="9" onClick={onClick} />
      <OrangeButton buttonText="x" onClick={onClick} />
      <GreyButton buttonText="4" onClick={onClick} />
      <GreyButton buttonText="5" onClick={onClick} />
      <GreyButton buttonText="6" onClick={onClick} />
      <OrangeButton buttonText="-" onClick={onClick} />
      <GreyButton buttonText="1" onClick={onClick} />
      <GreyButton buttonText="2" onClick={onClick} />
      <GreyButton buttonText="3" onClick={onClick} />
      <OrangeButton buttonText="+" onClick={onClick} />
      <ZeroButton buttonText="0" onClick={onClick} />
      <GreyButton buttonText="." onClick={onClick} />
      <OrangeButton buttonText="=" onClick={onClick} />
    </div>
  );
}

Keypad.propTypes = { onClick: PropTypes.func.isRequired };

function GreyButton(props) {
  const { buttonText, onClick } = props;

  return (
    <button
      type="button"
      className="grey-button button"
      onClick={() => {
        onClick(buttonText);
      }}
    >
      {buttonText}
    </button>
  );
}

GreyButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function OrangeButton(props) {
  const { buttonText, onClick } = props;
  return (
    <button
      type="button"
      className="orange-button button"
      onClick={() => {
        onClick(buttonText);
      }}
    >
      {buttonText}
    </button>
  );
}

OrangeButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function ZeroButton(props) {
  const { buttonText, onClick } = props;
  return (
    <button
      type="button"
      className="zero-button button"
      onClick={() => {
        onClick(buttonText);
      }}
    >
      {buttonText}
    </button>
  );
}

ZeroButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Calculator;
