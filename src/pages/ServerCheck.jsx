import axios from 'axios'
import React, { useState } from 'react'

const ServerCheck = () => {

    const [serverIP, setserverIP] = useState("")
    const [Data, setData] = useState([])

    const handleCheck = (e) => {
        e.preventDefault()


        axios.get(`https://api.mcsrvstat.us/3/${serverIP}`).then(response => { setData(response.data) })

    }

    return (
        <React.Fragment>
            <div className="box">
                <h2>MC Server Checker by felX</h2>
                <form onSubmit={handleCheck}>
                    <input type="text" name="server_ip" id="server_ip" required onChange={e => setserverIP(e.target.value)} placeholder='ServerIP'/>
                    <button type='submit'>Check</button>
                </form>

                <ul>
                    <li>Hostname : {Data.hostname}</li>
                    <li>IP : {Data.ip}</li>
                    <li>Online / Offline : {Data.online == true && <span>Online</span>} {Data.online == false && <span>Offline</span>}</li>
                    <li>Max Player Limit : {Data?.players?.max}</li>
                    <li>Online Players : {Data?.players?.online}</li>
                    <li>Protocol : {Data?.protocol?.name}</li>
                    <li>Version : {Data.version}</li>

                </ul>
            </div>
        </React.Fragment>
    )
}

export default ServerCheck