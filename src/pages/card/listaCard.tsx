import React from 'react';
import Link from 'next/link'
import { GetStaticProps } from 'next'

import SelectInput from '../../components/Selectinput'

export default function Home({ games, title }) {

    const isName = game => game.name === 'Sylmara';
    const isNames = games.filter(isName);

    const Nomes = games.map((c, i) => (
        c.data
    ));

    const options = [
        { value: 'Diogo Silva', label: 'Diogo SIlva' },
        { value: 'Davi Lucca', label: 'Davi Lucca' },
        { value: 'Gabrielly Silva', label: 'Gabrielly Silva' }
    ];

    console.log(Nomes)

    return (

        <main>

            <h1>🎮 Top Jogos Da Vida - Diogo 🎮  </h1>

            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/card/listaCard">
                    <a>Lita de Jogos</a>
                </Link>{' '}
                |{' '}
                <Link href="/Cards/cards">
                    <a>Reletório Geral</a>
                </Link>{' '}
                |{' '}
                <Link href="/card/listaNomes">
                    <a>Lista Nomes</a>
                </Link>
            </nav>

            <SelectInput  //>> filtro mês header Content
                options={Nomes}
            />


            <ol>
                {isNames.map((g, i) => {

                    const position = i + 1;
                    const medals = ["🥇", "🥈", "🥉", "🥉"]

                    return (
                        <li key={g.name}>
                            <span>
                                <span className="indice">
                                    {position}
                                </span>

                                <span className="name">
                                    {medals[i]}
                                    {'   '}
                                    {g.name}
                                </span>
                            </span>

                            <img src={g.image} alt={`Capa de ${g.name}`} />
                        </li>
                    )
                })}
            </ol>
        </main>
    )
}

export async function getStaticProps() {

    const { games, title } = await fetch('https://ideia-unica-pi-sepia.vercel.app/api/db')

        .then(res => {
            if (res.ok) return res.json()
        })
        .then(resObjPromise => resObjPromise)

    return {
        props: {
            games,
            title,
        },
        revalidate: 10
    }
}

