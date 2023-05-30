function Rules() {
  return (
    <div>
      <h1>RULES OF THE GAME</h1>
      <ul>
        <li>
          Start the game by clicking
          <strong>
            <q>Generate Number</q>
          </strong>
          button, which generates a number that should be cracked.
        </li>
        <li>
          Enter your number(0-9) to crack the code in the input area provided
          and click the <q>check</q> button.
        </li>

        <li>
          To know whether the digits of your input match with the digits of the
          number generated,you can make use of the background colours associated
          with the numbers.
        </li>
        <li>Background colour of digits becomes</li>
        <ul>
          <li>
            <strong>Green</strong> - if the digit and position of digit matches
            with number generated.
          </li>
          <li>
            <strong>Orange</strong> - if the digit is included but position of
            digit does not matches with number generated.
          </li>
          <li>
            <strong>Red</strong> - if the digit is not present in number
            generated.
          </li>
        </ul>

        <li>
          You have <strong>five</strong> chances of successfully cracking the
          code.
        </li>

        <li>
          The number of attempts remaining will be displayed after each check.
        </li>
        <li>
          A score is allotted to a user based on the number of attempts until a
          correct match is found by the user.
        </li>
        <ul>
          <li> 1st attempt - 10 points</li>
          <li> 2nd attempt - 9 points</li>
          <li> 3rd attempt - 8 points</li>
          <li> 4th attempt - 7 points</li>
          <li> 5th attempt - 6 points (Final attempt)</li>
        </ul>

        <li>
          If a user is unable to crack the code after five successful attempts,
          then the user is awarded <strong>zero</strong> points.
        </li>
      </ul>
    </div>
  );
}

export default Rules;
