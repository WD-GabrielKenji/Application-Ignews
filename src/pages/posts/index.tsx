import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts(){
    return (
        <>
            <Head >
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de junho de 2021</time>
                        <strong>Create a Monorepo with Lerna & Yarn Workspace</strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas nesciunt distinctio minima modi tenetur adipisci repudiandae quis atque aut, odit error! Numquam, mollitia.</p>
                    </a>
                    <a href="">
                        <time>12 de junho de 2021</time>
                        <strong>Create a Monorepo with Lerna & Yarn Workspace</strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas nesciunt distinctio minima modi tenetur adipisci repudiandae quis atque aut, odit error! Numquam, mollitia.</p>
                    </a>
                    <a href="">
                        <time>12 de junho de 2021</time>
                        <strong>Create a Monorepo with Lerna & Yarn Workspace</strong>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas nesciunt distinctio minima modi tenetur adipisci repudiandae quis atque aut, odit error! Numquam, mollitia.</p>
                    </a>
                </div>
            </main>
        </>
    );
}