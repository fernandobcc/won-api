import React from 'react';
import Wrapper, { A } from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <A key="website" href="https://github.com/fernandobcc/won-apio" target="_blank" rel="noopener noreferrer">
          Won Game
        </A>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
