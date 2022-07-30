import { ReadMore } from "../components/ReadMore"
import { data } from "../data"

export default function Home() {
  return (
    <div>
      {data ? (
        data.map((text) => (
          <ReadMore
            key={text.id}
            className={`expander`}
            limit={100}
            text={text.para}
            img={text.imageUrl}
          />
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  )
}
