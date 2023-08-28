import React from 'react';
import blogData from "../../Data/blogData.json";
import styles from './Post.module.css';

let getPost = (id) => {
  let data = blogData.filter((item) => item.id === id);
  return data;
}

export default function Post({ searchParams }) {

  const id = searchParams.id;
  let data = getPost(id);

  return (
    <div>
      <div className={styles.title}>
        {data.map((post) => {
          return (
            <div key={post.id}>
              <div>
                <span>{post.id}</span>
                <p>{post.date}</p>
              </div>
              <p className={styles.postTitle}>{post.title}</p>
              <p><span className='styles.postContent'>Content :</span>&nbsp;{post.content}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}