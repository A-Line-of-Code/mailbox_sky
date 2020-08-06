import React, {useRef} from "react";
import FlipPage from "react-flip-page";


export const Book = () => {
  console.log("render App");
  let flipPage = useRef(null);

  const onNext = () => {
    flipPage.gotoNextPage();
  };

  const onPrev = () => {
    flipPage.gotoPreviousPage();
  };

  return (
    <div>
      <FlipPage
        ref={component => {
          flipPage = component;
        }}
        orientation="horizontal"
        width="100%"
        animationDuration={2000}
      >
        <article>
          <img
            src="https://via.placeholder.com/968x200/0000FF/808080"
            alt="est"
          />
        </article>
        <article>
          <img
            src="https://via.placeholder.com/968x200/FF0000/FFFFFF"
            alt="est"
          />
        </article>
        <article>
          <img
            src="https://via.placeholder.com/968x200/FFFF00/000000"
            alt="est"
          />
        </article>
      </FlipPage>

      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
}


