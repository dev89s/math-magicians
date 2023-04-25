import { PropTypes } from 'prop-types';

function Calculator() {
  const result = 0;
  const multiply = '\u{00d7}';
  const divide = '\u{00f7}';
  return (
    <div className="calculator">
      <Display result={result} />
      <GreyButton buttonText="AC" />
      <GreyButton buttonText="+/-" />
      <GreyButton buttonText="%" />
      <OrangeButton buttonText={divide} />
      <GreyButton buttonText="7" />
      <GreyButton buttonText="8" />
      <GreyButton buttonText="9" />
      <OrangeButton buttonText={multiply} />
      <GreyButton buttonText="4" />
      <GreyButton buttonText="5" />
      <GreyButton buttonText="6" />
      <OrangeButton buttonText="-" />
      <GreyButton buttonText="1" />
      <GreyButton buttonText="2" />
      <GreyButton buttonText="3" />
      <OrangeButton buttonText="+" />
      <ZeroButton buttonText="0" />
      <GreyButton buttonText="." />
      <OrangeButton buttonText="=" />
    </div>
  );
}

function Display(props) {
  const { result } = props;
  return (
    <span className="calc-display">
      {result}
    </span>
  );
}

Display.defaultProps = { result: 0 };

Display.propTypes = { result: PropTypes.number };

function GreyButton(props) {
  const { buttonText } = props;
  return (
    <span className="grey-button">
      {buttonText}
    </span>
  );
}

GreyButton.propTypes = { buttonText: PropTypes.string.isRequired };

function OrangeButton(props) {
  const { buttonText } = props;
  return (
    <span className="orange-button">
      {buttonText}
    </span>
  );
}

OrangeButton.propTypes = { buttonText: PropTypes.string.isRequired };

function ZeroButton(props) {
  const { buttonText } = props;
  return (
    <span className="zero-button">
      {buttonText}
    </span>
  );
}

ZeroButton.propTypes = { buttonText: PropTypes.string.isRequired };

export default Calculator;
