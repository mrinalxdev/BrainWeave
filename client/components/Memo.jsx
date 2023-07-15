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
                    backgroundColor: "dodgerblue",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "100px",
                    color:"white",
                    borderRadius : "5px"
                   
                  }}
                >
                  {memo.name}
                </td>
        
                <td  
                  style={{
                    backgroundColor: "dodgerblue",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "300px",
                    color:"white",
                    borderRadius : "5px"
                  }}
                >
                  {memo.message}
                </td>
                <td  className="container-fluid"
                  style={{
                    backgroundColor: "dodgerblue",
                    border: "1px solid white",
                    borderCollapse: "collapse",
                    padding: "7px",
                    width: "400px",
                    color:"white",
                    borderRadius : "5px"
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
