import React from 'react';
import '../style/font.css';

const Page = ({ Typeeff, TouchMove, TouchStart, State, Anime, para, imgUrl, type }) => {
  let img = `/${imgUrl}`;
  if (type === 1) {
    return (
      <article
        onTouchMove={TouchMove}
        onTouchStart={TouchStart}
        className={`PageContainer ${Anime === State.next
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
            fontSize: '2.8em',
            letterSpacing: '1.2px',
          }}>
          {para}
        </p>
      </article>
    );
  } else if (type === 2) {
    return (
      <article
        onTouchMove={TouchMove}
        onTouchStart={TouchStart}
        className={`PageContainer ${Anime === State.next
          ? 'PageNextAnimation'
          : Anime === State.prev
            ? 'PagePrevAnimation'
            : ''
          } ${Typeeff && `PageContainerMain`}
            }
              }`}>
        <div className='imgStyle'>
          <img className='pageImage' src={img} alt='#' />
        </div>
        <p className='TextStyle'>{para}</p>
      </article>
    );
  } else if (type === 3) {
    return (
      <article
        onTouchMove={TouchMove}
        onTouchStart={TouchStart}
        className={`PageContainer ${Anime === State.next
          ? 'PageNextAnimation'
          : Anime === State.prev
            ? 'PagePrevAnimation'
            : ''
          } ${Typeeff && `PageContainerMain`}
            }
              }`}>
        <p className='TextStyle'>{para}</p>
      </article>
    );
  }
};

export default Page;
