import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai'; // Correct import path
import { styled } from 'styled-components';

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const heightScroll = 20;
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightScroll) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Wrapper>
      {showButton && (
        <button onClick={scrollToTop} className="top">
          <AiOutlineArrowUp className="do" />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .top {
    text-align: center;
    font-size: 3rem;
    color: #fe6a85ff;
    background-color: #f3f6fbff;
    border: none;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    z-index:5;
  }

  .do {
    font-size: 3rem;
    transition: all 0.2s ease-in-out;
    animation: top 2s ease-in-out 0s infinite normal forwards;

  }

  @keyframes top {
    from {
      transform: translateY(0.8rem);
    }
    to {
      transform: translateY(-0.5rem);
    }
  }
`;

export default GoToTop;
