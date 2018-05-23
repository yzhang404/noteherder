import React from 'react'
import quill from './quill.svg'
import newHover from './new-hover.png'
import newIcon from './new.png'


class Sidebar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            status: false,
            src: newIcon
        }
    }
    onButton(ev){
        this.setState({status: false, src: newHover})
        console.log(this.state)

    }
    offButton(ev){
        this.setState({status: true, src:newIcon})
        console.log(this.state)
    }
render(){
    return(
        <nav className="Sidebar"
        style={styles.sidebar}
        >
          <div className="logo"
          style = {styles.logo}
          >
            <img src={quill} alt="Noteherder"
            style = {styles.logoImg}
            />
          </div>
          <a className="new-note" href="/notes"
          >
            <img src={newHover} alt="New note"
                style = {styles.buttonImgHover}
             />
            <img className="outline" src={this.state.src} alt="New note"
                onMouseOver = {this.onButton.bind(this)}
                onMouseOut = {this.offButton.bind(this)}
            />
          </a>
          <div className="SignOut"
            style={styles.signOut}
          >
            <button
            style = {styles.signOutButton}
            >
              <i className="fa fa-sign-out"
              style = {styles.signOutButtonFa}
              ></i>
            </button>
          </div>
        </nav>
    );
}
}

const mouseEvent = {
    onMouseOver:  '<img src={newHover} alt="New note" style = {styles.buttonImgHover}/>'
}
const styles = {
    sidebar:{
        width: '6rem',
        backgroundColor: '#f3f3f3',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo:{
        fontFamily: '"Fauna One"',
        color: '#666',
        fontSize: '3rem',
    },
    logoImg:{
        width: '3rem',
        paddingLeft: '0.4rem',
    },
    newNote:{
        marginTop: '2rem',
        position:'relative',
        width: '4rem',
    },
    button:{
        backgroundColor: 'transparent',
        border:'0',
        color:'#008BF8',
        cursor: 'pointer',
    },
    buttonImg:{
        position: 'absolute',
        left:'0',
        height: '3rem',
        width:'3rem',
        transition:'opacity 0.25s ease-in-out',
    },
    buttonImgHover:{
        opacity:'0',
    },
    signOut:{
        position: 'absolute',
        bottom: '1rem',
    },
    signOutButton:{
        outline: 'none',
    },
    signOutButtonFa:{
        fontSize:'2rem',
    }

}
export default Sidebar