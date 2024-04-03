import React from 'react';
import Navbar from './components/molecules/navbar';
import Layout from './components/molecules/layout';
import CommentList from './components/organisms/comments';

const COMMENTS_LIST = [
  {
    id: 1,
    name: '프리미엄 스파게티머니 5932',
    content: '안녕하세요',
    date: '2021-08-10',
  },
  {
    id: 2,
    name: '프리미엄 스파게티머니 5932',
    content: '안녕하세요',
    date: '2021-08-10',
  },
  {
    id: 3,
    name: '프리미엄 스파게티머니 5932',
    content: '안녕하세요',
    date: '2021-08-10',
  },
];

export default function Community() {
  return (
    <>
      <Navbar />
      <Layout>
        <div>안녕하dd세요</div>
        <CommentList comments={COMMENTS_LIST} type="sara" />
      </Layout>
    </>
  );
}
