import usePokemonList from './hooks/usePokemonList'

function PokeBook() {
  const { data } = usePokemonList()

  return (
    <div>
      <h1>포켓몬 이름과 타입</h1>
      <div>
        {data?.pages.map((page, pageIndex) =>
          page.data.map((poke, idx) => (
            <div key={`${pageIndex}-${idx}`}>
              <img src={poke.pokemonImg} alt={poke.koreaName} width={100} />
              {poke.koreaName} - 타입: {poke.koreaTypeName.join(', ')}
            </div>
          )),
        )}
      </div>
    </div>
  )
}

export default PokeBook
