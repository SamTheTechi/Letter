import React from 'react';
import '../css/font.css';

const Page = ({ Typeeff, TouchMove, TouchStart, State, Anime, para, imgUrl, type }) => {
  let img = `./src/assets/${imgUrl}`;
  if (type === 1) {
    return (
      <>
        <article
          onTouchMove={TouchMove}
          onTouchStart={TouchStart}
          className={`PageContainer ${
            Anime === State.next
              ? 'PageNextAnimation'
              : Anime === State.prev
              ? 'PagePrevAnimation'
              : ''
          } ${Typeeff && `PageContainerMain`}
            }
              }`}>
          <p
            className='TextStyle'
            style={{
              fontSize: '2.5em',
              letterSpacing: '1.2px',
            }}>
            {para}
          </p>
        </article>
      </>
    );
  } else if (type === 2) {
    return (
      <>
        <article
          onTouchMove={TouchMove}
          onTouchStart={TouchStart}
          className={`PageContainer ${
            Anime === State.next
              ? 'PageNextAnimation'
              : Anime === State.prev
              ? 'PagePrevAnimation'
              : ''
          } ${Typeeff && `PageContainerMain`}
            }
              }`}>
          <p className='TextStyle'>{para}</p>
          <div className='imgStyle'>
            <img className='pageImage' src={img} alt='#' />
          </div>
        </article>
      </>
    );
  } else if (type === 3) {
    return (
      <>
        <article
          onTouchMove={TouchMove}
          onTouchStart={TouchStart}
          className={`PageContainer ${
            Anime === State.next
              ? 'PageNextAnimation'
              : Anime === State.prev
              ? 'PagePrevAnimation'
              : ''
          } ${Typeeff && `PageContainerMain`}
            }
              }`}>
          <p className='TextStyle'>{para}</p>
        </article>
      </>
    );
  }
};

export default Page;
