import { useEffect, useState } from 'react';
import styles from './TypeAnimation.module.css';

const TypeAnimation = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const textArray = ["Full-Stack Developer", "MERN Stack Developer", "Frontend Developer"];
    const currentIndex = textIndex % textArray.length;
    const fullText = textArray[currentIndex];

    let delta = 200;

    if (isDeleting) {
      delta /= 1;
    }

    if (!isDeleting && text === fullText) {
      delta = 200;
      setIsDeleting(true);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setTextIndex(textIndex + 1);
      delta = 100;
    }

    setTimeout(() => {
      const newText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(newText);
    }, delta);
  }, [text, isDeleting, textIndex]);

  return (
    <h1 className={`styles.typeAnimation lg:text-4xl text-xl text-white uppercase text-center lg:text-left`}> {text} < span className={styles.cursor} ></span ></h1 >
  );
};

export default TypeAnimation;
