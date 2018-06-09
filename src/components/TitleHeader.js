import React from 'react'

export class TitleHeader extends React.Component{
    render(){
        return(
            <header style={styles.header}>
                <div>ShopCart</div>
            </header>
        )
    }
}

const styles = {
    header:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6b27c4',
        padding: 25,
        margin: 0,
        fontSize: 30,
        color: 'white',
        fontFamily: 'Pacifico',
        fontWeight: 'bold',
        position: 'sticky',
        top: 0
    }
}