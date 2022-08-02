import { useState, useRef, useEffect } from "react"
import autoAnimate from "@formkit/auto-animate"

export const ReadMore = (props) => {
  const [show, setShow] = useState(false)

  const reveal = () => setShow(!show)

  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
    <div>
      <div className="wrapper">
        <div>
          <button onClick={reveal}>{show ? "-" : "+"}</button>
        </div>
        <div ref={parent} className="content">
          {show ? (
            <div className={props.className}>
              <img src={props.img} alt={props.img} />
              {props.text}
            </div>
          ) : (
            `${props.text.substr(0, props.limit)}...`
          )}
        </div>
      </div>
    </div>
  )
}
