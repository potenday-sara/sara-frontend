'use client';

import React, { useEffect, useState } from 'react';

type ChatAnimationProps = {
  messages: string[];
};

function ChatAnimation({ messages }: ChatAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string[]>([]);

  console.log('messages', messages);

  useEffect(() => {
    let messageIndex = 0;
    let charIndex = 0;
    let currentMessage = messages[messageIndex].trim();
    const interval = setInterval(() => {
      if (charIndex < currentMessage.length) {
        setDisplayedText((prev) => [
          ...prev.slice(0, -1),
          `${prev[prev.length - 1] ? prev[prev.length - 1] : ''}${
            currentMessage[charIndex] ? currentMessage[charIndex] : ''
          }`,
        ]);
        charIndex += 1;
      } else if (messageIndex < messages.length - 1) {
        messageIndex += 1;
        charIndex = 0;
        currentMessage = messages[messageIndex];
        setDisplayedText((prev) => [...prev, '']);
      } else {
        clearInterval(interval);
      }
    }, 50); // 글자가 나타나는 속도 (ms)

    return () => clearInterval(interval); // 클린업 함수
  }, [messages]);

  console.log('display', displayedText);
  return (
    <div>
      {displayedText.map((text, index) => (
        <p key={index}>{text ?? ''}</p>
      ))}
    </div>
  );
}

export default ChatAnimation;
