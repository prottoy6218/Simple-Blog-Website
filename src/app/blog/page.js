import Link from 'next/link';
import blogData from "../../Data/blogData.json";
import styles from "./Blog.module.css";

export default function Blog() {
  return (
    <div className={styles.title}>
      <h1>Blog Page</h1>
      <div>
        {blogData.map((data)=>{
          return (
            <p key={data.id}><Link href={{pathname:"/post",query:{id:data.id}}}>{data.title}</Link></p>
          )
        })}
      </div>
    </div>
    
  )
}

