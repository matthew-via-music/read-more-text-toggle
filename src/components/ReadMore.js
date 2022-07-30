import { useState } from "react"

export const ReadMore = (props) => {
  const [isShown, setIsShown] = useState(false)

  const toggleBtn = () => {
    setIsShown((prevState) => !prevState)
  }

  return (
    <div className="wrapper">
      <div>
        <button onClick={toggleBtn}>{isShown ? "-" : "+"}</button>
      </div>
      <div className="content">
        {isShown ? (
          <div className={props.className}>
            <img src={props.img} alt={props.img} />
            {props.text}
          </div>
        ) : (
          `${props.text.substr(0, props.limit)}...`
        )}
      </div>
    </div>
  )
}
