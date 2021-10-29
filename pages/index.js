import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/Link';
import styles from '../styles/Home.module.css';




export default function Home({list}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Filmes em Destaque 
        </h1>

        

        <ul>
          {list.map(item=> (
            <li key ={item.id}>
              <a href={`/movie/${item.id}`}>                           
                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br/>
                {item.title} 
              </a>          

            </li>

          ))}     


        </ul>

        <Link href="/sobre">Sobre a página</Link>
 
     

      </main>

    </div>
  )
}


export async function getServerSideProps(){
  const res= await fetch('http://https://teste02.vercel.app/api/trending');
  const json= await res.json();
  return {
    props:{
      list: json.list
    }


  };

}