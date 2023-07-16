import React, { useEffect, useState } from 'react'
import "./component.css"

const Memo = ({ state }) => {
  const [memos, setMemos]= useState([]);
  const { contract } = state
  useEffect(() => {
    const memoMessage = async() => {
      const memos = await contract.getMemos();
      setMemos(memos)
      console.log(memos)
    }
    contract && memoMessage()
  }, [contract])
  return (
    <div className="container-fluid">         
          <table>
          <tbody >
    {memos.map((memo) => {
      return (
              <tr >
                <td 
                  style={{
                    backgroundColor: "black",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "100px",
                    color:"white",
                    borderRadius : "5px",
                    textAlign : "center",
                  }}
                >
                  {memo.name}
                </td>
        
                <td  
                  style={{
                    backgroundColor: "black",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "300px",
                    color:"white",
                    borderRadius : "5px",
                    textAlign : "center"
                  }}
                >
                  {memo.message}
                </td>
                <td  className="container-fluid"
                  style={{
                    backgroundColor: "black",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "2rem",
                    width: "400px",
                    color:"white",
                    borderRadius : "5px",
                    textAlign : "center"
                  }}
                >
                  {memo.from}
                </td>
              </tr>
       
      );
    })}
         </tbody>
          </table>
  </div>
  )
}

export default Memo
