'use client';

import React, { useEffect, useState } from 'react';

type ChatAnimationProps = {
  messages: string[];
};

function ChatAnimation({ messages }: ChatAnimationProps) {
  const [displayedText, setDisplayedText] = useState(['']); // 초기 상태는 빈 문자열로 시작
  const [messageIndex, setMessageIndex] = useState(0); // 현재 보여줄 메시지의 인덱스
  const [charIndex, setCharIndex] = useState(0); // 메시지 안에서의 글자 인덱스

  useEffect(() => {
    if (messageIndex < messages.length) {
      const currentMessage = messages[messageIndex];
      const interval = setInterval(() => {
        if (charIndex < currentMessage.length) {
          setDisplayedText((prev) => {
            const lastLine = prev[prev.length - 1] || ''; // 마지막 줄 가져오기
            return [
              ...prev.slice(0, -1), // 마지막 줄 제외
              lastLine + currentMessage[charIndex], // 마지막 줄에 글자 추가
            ];
          });
          setCharIndex((prev) => prev + 1); // 글자 인덱스 증가
        } else if (messageIndex < messages.length - 1) {
          setMessageIndex((prev) => prev + 1); // 다음 메시지로 이동
          setCharIndex(0); // 글자 인덱스 초기화
          setDisplayedText((prev) => [...prev, '']); // 새로운 줄 추가
        } else {
          clearInterval(interval); // 메시지 끝나면 타이머 해제
        }
      }, 50); // 속도 조절 (ms)

      return () => clearInterval(interval); // 클린업 함수
    }
  }, [charIndex, messageIndex, messages]);

  return (
    <div>
      {displayedText.map((text, index) => (
        <p key={index}>{text ?? ''}</p>
      ))}
    </div>
  );
}

export default ChatAnimation;
