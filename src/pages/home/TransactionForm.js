import React, { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

function TransactionForm({ uid }) {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { addDocument, response } = useFirestore('transactions')

    const handelSubmit = (e) => {
        e.preventDefault()
            addDocument({uid, name, amount,})
    }
    //reset the from fields
    useEffect(() => {
        if (response.success){
            setName('')
            setAmount('')
        }
    }, [response.success])

return (
     <>
        <h3>Add Your Transaction</h3> 
        <form onSubmit={handelSubmit}>
            <label>
            <span>Transaction Name:</span>
            <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
            </label>

            <label>
            <span>Amount ($):</span>
            <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            />
            </label>
            <button>Add Transaction</button>
        </form>
     </>
)
}

export default TransactionForm