import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css'




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
          Sobre o sistema
        </h1>

        <img src={'https://w7.pngwing.com/pngs/733/994/png-transparent-shiba-inu-doge-puppy-siberian-husky-meme-puppy-animals-carnivoran-dog-like-mammal-thumbnail.png'} width="480" /><br/>

        Este é um sistema desenvolvido/copiado em uma noite. Com mais tempo e dedicação pode ser aprimorado

       



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