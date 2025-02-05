import React, { useEffect, useRef, useState } from 'react';
import Page from '../util/slides';
import { pageInfo } from '../util/data';
import '../style/font.css';
import '../style/global.css';
import '../style/letter.css';
import mp3Song from '../../public/background.mp3';
import mp3Swap from '../../public/swap.mp3';

const Letter = () => {
  const slideVal = window.innerWidth / 3;
  const state = {
    prev: 0,
    hold: 1,
    next: 2,
  };
  const [touches, setTouches] = useState([]);
  const [distance, setDistance] = useState(0);
  const [change, setChange] = useState(false);
  const [anime, setanime] = useState(state.hold);
  const [currentPage, setCurrentPage] = useState(1);
  const [string, setString] = useState('');
  const [typeOccurred, setTypeOccurred] = useState(true);
  const refCount = useRef(0);
  const paras = pageInfo.everyone[currentPage - 1].para;
  const swapAudioRef = useRef(new Audio(mp3Swap));
  const swapMusicRef = useRef(new Audio(mp3Song));

  useEffect(() => {
    swapMusicRef.current.volume = 0.25;
    swapMusicRef.current.play();
    swapAudioRef.current.volume = 1;
    swapAudioRef.current.play();
  }, [currentPage]);

  useEffect(() => {
    setTimeout(() => {
      setTypeOccurred(false);
    }, 2500);
  }, []);

  useEffect(() => {
    if (!typeOccurred && refCount.current <= paras.length) {
      const timeout = setTimeout(() => {
        setString(paras.split('', refCount.current));
        refCount.current = refCount.current + 1;
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [typeOccurred, paras, string]);

  useEffect(() => {
    setString('');
    currentPage === pageInfo.everyone.length && setCurrentPage(1);
    refCount.current = 0;
  }, [currentPage]);

  useEffect(() => {
    if (!change) {
      const value = Math.abs(Math.floor(distance));
      if (distance < 0 && value > slideVal) {
        setChange(true);
        setanime(state.next);
        setTimeout(() => {
          setCurrentPage((prevPage) => prevPage + 1);
          setanime(state.hold);
        }, 620);
      } else if (value > slideVal) {
        setChange(true);
        setanime(state.prev);
        setTimeout(() => {
          setCurrentPage((prevPage) => prevPage + 1);
          setanime(state.hold);
        }, 620);
      } else {
        setChange(false);
        setanime(state.hold);
      }
    }
  }, [distance]);

  const touchStart = (e) => {
    const touch = e.touches[0];
    setTouches([{ x: touch.clientX }]);
    setChange(false);
  };

  const touchMove = (e) => {
    const touch = e.touches[0];
    const newTouches = [...touches, { x: touch.clientX }];
    setTouches(newTouches);

    const totalDistance = newTouches.reduce((acc, curr, index) => {
      if (index > 0) {
        const deltaX = curr.x - newTouches[index - 1].x;
        return acc + Math.floor(deltaX);
      }
      return acc;
    }, 0);
    setDistance(totalDistance);
  };

  return (
    <>
      <div
        className='Page2HeroBackGround'
        style={{
          backgroundImage: `url(${pageInfo.everyone.find((img) => currentPage === img.key)?.backGround
            })`,
        }}>
        <span className='PageContainer PageContainerBack1'></span>
        <span className='PageContainer PageContainerBack2'></span>
        <span className='PageContainer PageContainerBack3'></span>

        {pageInfo.everyone.map((pageData) => {
          return (
            currentPage === pageData.key && (
              <Page
                imgUrl={pageData.image}
                key={pageData.key}
                {...pageData}
                para={string}
                TouchMove={touchMove}
                TouchStart={touchStart}
                State={state}
                Anime={anime}
                Typeeff={typeOccurred}
              />
            )
          );
        })}
      </div>
    </>
  );
};

export default Letter;
